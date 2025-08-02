import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rating } from '@/components/ui/rating';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <Card className="overflow-hidden h-full transition-all duration-300 ease-in-out group-hover:shadow-xl">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={product.images[0]}
              alt={product.name}
              data-ai-hint={`${product.category.toLowerCase()}`}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {product.isTrending && (
              <Badge variant="destructive" className="absolute top-2 left-2">
                Trending
              </Badge>
            )}
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <h3 className="font-semibold text-lg truncate mt-1">{product.name}</h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
              <div className="flex items-center gap-1">
                <Rating rating={product.rating} />
                <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
