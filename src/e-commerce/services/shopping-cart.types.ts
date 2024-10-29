import { OrderProduct } from "./order.types";

export interface CartItem extends OrderProduct {
  displayName: string;
  selectedOptions?: {
    size?: string;
    color?: string;
    [key: string]: any;
  };
}

export interface CartState {
  items: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  updateOptions: (productId: number, options: CartItem['selectedOptions']) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getShippingCost: () => number;
  getTaxAmount: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}
