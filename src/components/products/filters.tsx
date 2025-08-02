"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

const allSizes = ['Small', 'Medium', 'Large', 'One Size', '10-inch', '12-inch', '24-inch', '36-inch', '50"x60"', '60"x80"'];

export default function Filters({ filters, setFilters, allCategories }) {

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleSizeChange = (size: string) => {
    setFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({ ...prev, price: value }));
  };

  const handleTrendingChange = (checked: boolean) => {
    setFilters(prev => ({ ...prev, trending: checked }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4">Category</h3>
          <div className="space-y-2">
            {allCategories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox 
                    id={category} 
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label htmlFor={category} className="font-normal">{category}</Label>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <Slider
            min={0}
            max={500}
            step={10}
            value={filters.price}
            onValueChange={handlePriceChange}
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>${filters.price[0]}</span>
            <span>${filters.price[1]}</span>
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="font-semibold mb-4">Size</h3>
          <div className="space-y-2">
            {allSizes.slice(0, 4).map(size => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox 
                    id={size}
                    checked={filters.sizes.includes(size)}
                    onCheckedChange={() => handleSizeChange(size)}
                 />
                <Label htmlFor={size} className="font-normal">{size}</Label>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Trending</h3>
            <Switch
                checked={filters.trending}
                onCheckedChange={handleTrendingChange}
             />
          </div>
          <p className="text-sm text-muted-foreground">Show only trending products</p>
        </div>
      </CardContent>
    </Card>
  );
}
