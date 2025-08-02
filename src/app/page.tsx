import Hero from '@/components/home/hero';
import CategoryProducts from '@/components/home/category-products';
import Faq from '@/components/home/faq';
import Testimonials from '@/components/home/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategoryProducts />
      <Faq />
      <Testimonials />
    </div>
  );
}
