import type { Product, Testimonial, Review, FAQ, Category } from './types';

export const categories: Category[] = ['Home Decor', 'Furniture', 'Kitchen', 'Lighting'];

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Ceramic Vase',
    description: 'Minimalist design to complement modern decor.',
    longDescription: 'A beautifully crafted ceramic vase, perfect for adding a touch of elegance to any room. Its minimalist design complements both modern and traditional decor. Made from high-quality porcelain with a smooth, matte finish.',
    price: 49.99,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Home Decor',
    sizes: ['Small', 'Medium', 'Large'],
    rating: 4.5,
    reviewCount: 120,
    isTrending: true,
  },
  {
    id: '2',
    name: 'Modern Oak Armchair',
    description: 'Handcrafted from solid oak with plush cushioning.',
    longDescription: 'Experience ultimate comfort with our Modern Oak Armchair. Handcrafted from solid oak, this chair features plush, durable cushioning and a timeless design that fits seamlessly into any living space.',
    price: 399.0,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Furniture',
    sizes: ['One Size'],
    rating: 4.8,
    reviewCount: 85,
    isTrending: false,
  },
  {
    id: '3',
    name: 'Copper Chef\'s Pan',
    description: 'Superior heat conductivity for perfect meals.',
    longDescription: 'Elevate your cooking with our Copper Chef\'s Pan. Offering superior heat conductivity and a non-stick surface, this pan is a favorite among professional chefs. Suitable for all stovetops, including induction.',
    price: 129.5,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Kitchen',
    sizes: ['10-inch', '12-inch'],
    rating: 4.9,
    reviewCount: 210,
    isTrending: true,
  },
  {
    id: '4',
    name: 'Industrial Pendant Light',
    description: 'Vintage-inspired lighting for a chic ambiance.',
    longDescription: 'Add a touch of vintage charm to your home with this Industrial Pendant Light. Featuring a brushed metal finish and an exposed bulb design, it creates a warm, inviting ambiance in any room.',
    price: 89.99,
    images: [
      'https://placehold.co/600x600.png',
    ],
    category: 'Lighting',
    sizes: ['One Size'],
    rating: 4.3,
    reviewCount: 65,
    isTrending: false,
  },
  {
    id: '5',
    name: 'Linen Throw Blanket',
    description: 'Soft, breathable, and perfect for any season.',
    longDescription: 'Wrap yourself in comfort with our 100% pure linen throw blanket. It\'s soft, breathable, and gets softer with every wash. The perfect cozy addition to your sofa or bed.',
    price: 75.0,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Home Decor',
    sizes: ['50"x60"', '60"x80"'],
    rating: 4.7,
    reviewCount: 150,
    isTrending: true,
  },
  {
    id: '6',
    name: 'Floating Wall Shelves',
    description: 'Sleek and minimalist storage solution.',
    longDescription: 'Declutter your space with these sleek floating wall shelves. Made from solid wood, they provide a minimalist and functional storage solution for books, plants, and decor items.',
    price: 65.0,
    images: [
      'https://placehold.co/600x600.png',
    ],
    category: 'Furniture',
    sizes: ['24-inch', '36-inch'],
    rating: 4.6,
    reviewCount: 95,
    isTrending: false,
  },
  {
    id: '7',
    name: 'Artisan Coffee Maker',
    description: 'Brew the perfect cup with this stylish machine.',
    longDescription: 'For the coffee connoisseur, our Artisan Coffee Maker combines style and functionality. It features precise temperature control and a slow-drip process to extract the full flavor of your beans.',
    price: 199.99,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Kitchen',
    sizes: ['One Size'],
    rating: 4.9,
    reviewCount: 180,
    isTrending: true,
  },
  {
    id: '8',
    name: 'Sculptural Floor Lamp',
    description: 'A statement piece that illuminates with style.',
    longDescription: 'Make a statement with this Sculptural Floor Lamp. Its unique, artistic design provides both ambient lighting and a conversation piece for your living room or office. Features a dimmer switch for adjustable brightness.',
    price: 250.0,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Lighting',
    sizes: ['One Size'],
    rating: 4.8,
    reviewCount: 77,
    isTrending: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah L.',
    handle: '@sarahdesigns',
    text: "ShelfJoy has completely transformed my living space. The quality and design of their products are unmatched. The ceramic vase I bought is a centerpiece in my home!",
    avatar: 'https://placehold.co/48x48.png',
  },
  {
    id: '2',
    author: 'Mark Chen',
    handle: '@markchen_dev',
    text: "As a chef, I'm picky about my cookware. The copper pan from ShelfJoy is phenomenal. It heats evenly and looks stunning. Customer service was also top-notch.",
    avatar: 'https://placehold.co/48x48.png',
  },
  {
    id: '3',
    author: 'Emily White',
    handle: '@emilywhitehome',
    text: "I'm in love with the modern armchair. It's the perfect reading chair – comfortable, stylish, and incredibly well-made. It was worth every penny.",
    avatar: 'https://placehold.co/48x48.png',
  },
  {
    id: '4',
    author: 'David R.',
    handle: '@davebuilds',
    text: "The industrial pendant light gives my studio the exact vibe I was going for. The checkout process was seamless and the delivery was quick. Highly recommend!",
    avatar: 'https://placehold.co/48x48.png',
  },
];

export const reviews: Review[] = [
    { id: '1', productId: '1', author: 'Jenna M.', rating: 5, text: 'Absolutely stunning vase. It looks even better in person. The quality is fantastic.', avatar: 'https://placehold.co/40x40.png', date: '2 weeks ago'},
    { id: '2', productId: '1', author: 'Carlos V.', rating: 4, text: 'Very nice and elegant. A bit smaller than I expected, but it works for my space.', avatar: 'https://placehold.co/40x40.png', date: '1 month ago'},
    { id: '3', productId: '2', author: 'Aisha K.', rating: 5, text: 'This chair is a dream. So comfortable and it looks so chic in my living room. Assembly was easy too.', avatar: 'https://placehold.co/40x40.png', date: '3 weeks ago'},
    { id: '4', productId: '3', author: 'Tom B.', rating: 5, text: 'Best pan I\'ve ever owned. Total game changer for searing steaks. Worth the investment.', avatar: 'https://placehold.co/40x40.png', date: '1 week ago'},
];

export const faqs: FAQ[] = [
    {
        id: '1',
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy on all items. If you're not satisfied with your purchase, you can return it for a full refund or exchange, provided it's in its original condition and packaging."
    },
    {
        id: '2',
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 5-7 business days. We also offer expedited shipping options at checkout for faster delivery. You'll receive a tracking number once your order has shipped."
    },
    {
        id: '3',
        question: "Do you ship internationally?",
        answer: "Currently, we ship to the United States and Canada. We are working on expanding our shipping to other countries in the near future. Stay tuned for updates!"
    },
    {
        id: '4',
        question: "How do I care for my products?",
        answer: "Each product comes with specific care instructions. Generally, for our furniture, we recommend using a soft cloth and mild cleaners. For textiles, please refer to the care label."
    }
];
