import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../services/cart.types';
import { BehaviorSubject, fromEvent } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CartStore {
  STORAGE_KEY = 'cart';
  cart: Cart = { items: []};
  cart$ = new BehaviorSubject<Cart>(this.cart);

  constructor() {
    this.cart = this.load();
    this.cart$.next(this.cart);

    fromEvent<StorageEvent>(window, 'storage')
      .subscribe((event) => {
        if (event.key === this.STORAGE_KEY) {
          this.cart = this.load();
          this.cart$.next(this.cart);
        }
      });
  }

  get() {
    return this.cart$.asObservable();
  }

  add(item: CartItem) {
    const existingItem = this.find(item);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.items.push(item);
    }
    this.save();
  }

  remove(item: CartItem) {
    this.cart.items = this.cart.items.filter(i => i.displayName !== item.displayName);
    this.save();
  }

  quantity(item: CartItem, quantity: number) {
    if (quantity <= 0) {
      this.remove(item);
    }

    item.quantity = quantity;
    this.save();
  }

  find(item: CartItem) {
    return this.cart.items.find(i => i.displayName === item.displayName);
  }

  /* Localstorage Methods */
  load(): Cart {
    const cart = localStorage.getItem(this.STORAGE_KEY);
    return cart ? JSON.parse(cart) : { items: [] };
  }

  save() {
    this.cart$.next(this.cart);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cart));
  }
}
