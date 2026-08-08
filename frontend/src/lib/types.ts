export interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  featured: boolean;
  bestSeller: boolean;
  seasonal: boolean;
  dietary: string[];
  allergen: string;
  available: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  category: string;
  caption: string;
  sortOrder: number;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface SpecialOrderPayload {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  orderType: string;
  guests?: string;
  flavor?: string;
  message: string;
}
