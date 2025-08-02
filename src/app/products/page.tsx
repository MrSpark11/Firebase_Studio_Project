"use client";

import { useState, useMemo } from 'react';
import { products, categories as allCategories } from '@/lib/placeholders';
import ProductList from '@/components/products/product-list';
import Filters from '@/components/products/filters';
import type { Product } from '@/lib/types';
import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    price: [0, 500],
    sizes: [],
    trending: false,
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const { categories, price, sizes, trending } = filters;
      
      const categoryMatch = categories.length === 0 || categories.includes(product.category);
      const priceMatch = product.price >= price[0] && product.price <= price[1];
      const trendingMatch = !trending || product.isTrending;
      
      const sizeMatch = sizes.length === 0 || product.sizes.some(size => sizes.includes(size));
      
      return categoryMatch && priceMatch && trendingMatch && sizeMatch;
    });
  }, [filters]);

  return (
    <div className="container py-8">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl font-bold">All Products</h1>
        <p className="text-muted-foreground mt-2">Find your next favorite item from our curated collection.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <Filters filters={filters} setFilters={setFilters} allCategories={allCategories} />
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5">
          <ProductList products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}
