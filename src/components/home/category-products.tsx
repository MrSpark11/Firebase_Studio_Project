import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products, categories } from "@/lib/placeholders"
import ProductCard from "@/components/product-card"

export default function CategoryProducts() {
  return (
    <section className="py-12 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Shop by Category</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Find the perfect items to complete your home, organized for your convenience.</p>
        </div>
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-xl">
            {categories.map(category => (
                 <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map(category => (
            <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {products.filter(p => p.category === category).slice(0, 4).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
