"use client";

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CartItem from '@/components/cart/cart-item';
import CartSummary from '@/components/cart/cart-summary';
import { ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cartItems, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="container text-center py-20">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="mt-4 font-headline text-3xl font-bold">Your Cart is Empty</h1>
        <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-6">
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Items ({cartCount})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {cartItems.map((item, index) => (
                            <CartItem key={`${item.product.id}-${item.size}-${index}`} item={item} />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="md:col-span-1">
            <CartSummary />
        </div>
      </div>
    </div>
  );
}
