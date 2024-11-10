import { OrderProduct } from "./order.types";

export interface CartItem extends OrderProduct {
  displayName: string;
  image: string;
  selectedOptions?: {
    size?: string;
    color?: string;
    [key: string]: any;
  };
}

export interface Cart {
  items: CartItem[];
}
