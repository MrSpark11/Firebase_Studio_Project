import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold mb-2">ShelfJoy</h3>
            <p className="text-sm text-muted-foreground">Curated items for your home, designed with passion.</p>
            <div className="flex space-x-4 mt-4">
                <Link href="#" aria-label="Github"><Github className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
                <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
                <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=Home+Decor" className="text-muted-foreground hover:text-foreground">Home Decor</Link></li>
              <li><Link href="/products?category=Furniture" className="text-muted-foreground hover:text-foreground">Furniture</Link></li>
              <li><Link href="/products?category=Kitchen" className="text-muted-foreground hover:text-foreground">Kitchen</Link></li>
              <li><Link href="/products?category=Lighting" className="text-muted-foreground hover:text-foreground">Lighting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">FAQs</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Track Order</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="font-semibold mb-4">Stay in touch</h4>
             <p className="text-sm text-muted-foreground mb-2">Get updates on new arrivals and special offers.</p>
             <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit" variant="default">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ShelfJoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
