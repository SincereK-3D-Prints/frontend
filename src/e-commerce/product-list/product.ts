export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
  discount_type?: string;
  url?: string;
  color?: string;
  colors?: string[];
  currency?: string;
}
