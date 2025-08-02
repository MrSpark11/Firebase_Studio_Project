"use client";

import Image from 'next/image';
import { useCart } from '@/hooks/use-cart';
import type { CartItem as CartItemType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import Link from 'next/link';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity)) {
      updateQuantity(item.product.id, item.size, newQuantity);
    }
  };

  return (
    <div className="flex items-start gap-4">
      <div className="relative h-24 w-24 rounded-md overflow-hidden">
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          data-ai-hint={`${item.product.category.toLowerCase()}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <Link href={`/products/${item.product.id}`} className="font-semibold hover:underline">
          {item.product.name}
        </Link>
        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
        <p className="text-sm font-medium mt-1">${item.product.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <Input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="h-9 w-16"
          />
        </div>
      </div>
      <div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeFromCart(item.product.id, item.size)}
          aria-label="Remove item"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
