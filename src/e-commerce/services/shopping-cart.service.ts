import { Injectable } from "@angular/core";
import { CartItem, CartState } from "./shopping-cart.types";
import { Observable } from "rxjs";
import { CartStore } from "../stores/shopping-cart.store";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private store: CartStore) {}

  // Get current state values
  get items(): CartItem[] {
    return this.store.getState().items;
  }

  get subtotal(): number {
    return this.store.getState().getSubtotal();
  }

  get shippingCost(): number {
    return this.store.getState().getShippingCost();
  }

  get tax(): number {
    return this.store.getState().getTaxAmount();
  }

  get total(): number {
    return this.store.getState().getTotal();
  }

  get itemCount(): number {
    return this.store.getState().getItemCount();
  }

  // Actions
  addItem(product: CartItem): void {
    const currentState = this.store.getState();
    const existingItem = currentState.items.find(
      item => item.id === product.id &&
        JSON.stringify(item.selectedOptions) === JSON.stringify(product.selectedOptions)
    );

    this.store.setState({
      items: existingItem
        ? currentState.items.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
        : [...currentState.items, { ...product, quantity: product.quantity || 1 }]
    });
  }

  removeItem(productId: number): void {
    const currentState = this.store.getState();
    this.store.setState({
      items: currentState.items.filter(item => item.id !== productId)
    });
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentState = this.store.getState();
    this.store.setState({
      items: currentState.items
        .map(item =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item
        )
        .filter(item => item.quantity > 0)
    });
  }

  updateOptions(productId: number, options: CartItem['selectedOptions']): void {
    const currentState = this.store.getState();
    this.store.setState({
      items: currentState.items.map(item =>
        item.id === productId
          ? { ...item, selectedOptions: { ...item.selectedOptions, ...options } }
          : item
      )
    });
  }

  clearCart(): void {
    this.store.setState({ items: [] });
  }

  // Subscribe to store changes
  select<T>(selector: (state: CartState) => T): Observable<T> {
    return this.store.select(selector);
  }
}
