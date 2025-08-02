"use client";

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products, reviews as allReviews } from '@/lib/placeholders';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Rating } from '@/components/ui/rating';
import { useCart } from '@/hooks/use-cart';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  const reviews = allReviews.filter(r => r.productId === params.id);
  
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
        alert("Please select a size.");
        return;
    }
    addToCart(product, selectedSize || 'One Size', quantity);
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((src, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0 aspect-square relative">
                      <Image
                        src={src}
                        alt={`${product.name} image ${index + 1}`}
                        data-ai-hint={`${product.category.toLowerCase()} product`}
                        fill
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <h1 className="font-headline text-3xl md:text-4xl font-bold mt-1">{product.name}</h1>
            <div className="flex items-center gap-4 mt-3">
                <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
                <div className="flex items-center gap-2">
                    <Rating rating={product.rating} />
                    <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
            </div>
            {product.isTrending && <Badge variant="destructive" className="mt-2">Trending</Badge>}
          </div>

          <p className="text-base text-muted-foreground leading-relaxed">{product.longDescription}</p>

          {product.sizes.length > 1 && (
            <div>
              <Label className="text-base font-medium">Size</Label>
              <RadioGroup
                defaultValue={selectedSize}
                onValueChange={setSelectedSize}
                className="flex items-center gap-2 mt-2"
              >
                {product.sizes.map(size => (
                  <Label
                    key={size}
                    htmlFor={`size-${size}`}
                    className="border rounded-md p-3 has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:checked]:border-primary cursor-pointer"
                  >
                    <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                    {size}
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>

      <Separator className="my-12" />

      <div>
        <h2 className="font-headline text-2xl md:text-3xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-8">
            {reviews.length > 0 ? reviews.map(review => (
                <div key={review.id} className="flex gap-4">
                    <Avatar>
                        <AvatarImage src={review.avatar} alt={review.author} data-ai-hint="avatar"/>
                        <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold">{review.author}</p>
                                <p className="text-xs text-muted-foreground">{review.date}</p>
                            </div>
                            <Rating rating={review.rating} />
                        </div>
                        <p className="text-muted-foreground mt-2">{review.text}</p>
                    </div>
                </div>
            )) : <p className="text-muted-foreground">No reviews for this product yet.</p>}
        </div>
      </div>
    </div>
  );
}
