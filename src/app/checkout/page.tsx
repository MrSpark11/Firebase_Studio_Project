"use client";

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CheckoutForm from '@/components/checkout/checkout-form';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cartItems, cartTotal, cartCount } = useCart();
  const router = useRouter();

  useEffect(() => {
    if(cartCount === 0) {
      router.push('/products');
    }
  }, [cartCount, router]);
  
  const shippingCost = cartTotal > 50 ? 0 : 7.99;
  const total = cartTotal + shippingCost;
  
  if (cartCount === 0) {
    return null; 
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="order-2 lg:order-1">
          <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">Checkout</h1>
          <CheckoutForm />
        </div>
        <div className="order-1 lg:order-2">
            <Card className="bg-muted/40">
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {cartItems.map(item => (
                        <div key={item.product.id} className="flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-md overflow-hidden">
                                <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center text-xs">{item.quantity}</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold">{item.product.name}</p>
                                <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                            </div>
                            <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                     <div className="border-t pt-4 space-y-2">
                         <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                         </div>
                         <div className="flex justify-between text-muted-foreground">
                            <span>Shipping</span>
                            <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                         </div>
                         <div className="flex justify-between font-bold text-lg pt-2">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                         </div>
                     </div>
                </CardContent>
            </Card>
            <Button variant="link" asChild className="mt-4">
                <Link href="/cart">Back to Cart</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
