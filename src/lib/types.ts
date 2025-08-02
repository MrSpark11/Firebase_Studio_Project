export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  images: string[];
  category: string;
  sizes: string[];
  rating: number;
  reviewCount: number;
  isTrending: boolean;
};

export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
};

export type Testimonial = {
  id: string;
  author: string;
  text: string;
  avatar: string;
  handle: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
  size: string;
};

export type Category = 'Home Decor' | 'Furniture' | 'Kitchen' | 'Lighting';
