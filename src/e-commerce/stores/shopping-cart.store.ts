import { Injectable } from '@angular/core';
import { ZustandBaseService } from 'ngx-zustand';
import { StateCreator, StoreApi } from 'zustand/vanilla';
import { CartState, CartItem } from '../services/shopping-cart.types';
import { Observable } from 'rxjs';

const STORAGE_KEY = 'shopping-cart';

type PersistedState = Pick<CartState, 'items'>;

const loadState = (): PersistedState => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    console.log('Loading state from localStorage:', savedState);
    return savedState ? JSON.parse(savedState) : { items: [] };
  } catch (error) {
    console.error('Error loading cart state:', error);
    return { items: [] };
  }
};

const saveState = (state: PersistedState): void => {
  try {
    console.log('Saving state to localStorage:', state);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving cart state:', error);
  }
};

const TAX_RATE = 0.1;

@Injectable({ providedIn: 'root' })
export class CartStore extends ZustandBaseService<CartState> {
  constructor() {
    super();
    // Load initial state when store is created
    const initialState = loadState();
    console.log('Initializing store with state:', initialState);
  }

  initStore(): StateCreator<CartState> {
    return (set, get, store) => {
      // Create the base state and methods
      const baseState: CartState = {
        items: loadState().items,

        addItem: (product: CartItem) => set((state: CartState) => {
          const existingItem = state.items.find(
            (item: CartItem) =>
              item.id === product.id &&
              JSON.stringify(item.selectedOptions) === JSON.stringify(product.selectedOptions)
          );

          const newItems = existingItem
            ? state.items.map((item: CartItem) =>
              item === existingItem
                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                : item
            )
            : [...state.items, { ...product, quantity: product.quantity || 1 }];

          return { items: newItems };
        }),

        removeItem: (productId: number) => set((state: CartState) => ({
          items: state.items.filter((item: CartItem) => item.id !== productId)
        })),

        updateQuantity: (productId: number, quantity: number) => set((state: CartState) => ({
          items: state.items.map((item: CartItem) =>
            item.id === productId
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ).filter((item: CartItem) => item.quantity > 0)
        })),

        updateOptions: (productId: number, options: CartItem['selectedOptions']) =>
          set((state: CartState) => ({
            items: state.items.map((item: CartItem) =>
              item.id === productId
                ? { ...item, selectedOptions: { ...item.selectedOptions, ...options } }
                : item
            )
          })),

        clearCart: () => set(() => ({
          items: []
        })),

        getSubtotal: () => {
          const state = get();
          return Number(state.items.reduce(
            (sum: number, item: CartItem) => sum + (item.price * item.quantity),
            0
          ).toFixed(2));
        },

        getShippingCost: () => {
          const state = get();
          return Number(state.items.reduce(
            (sum: number, item: CartItem) => sum + (item.shipping_cost * item.quantity),
            0
          ).toFixed(2));
        },

        getTaxAmount: () => {
          const state = get();
          const subtotal = state.getSubtotal();
          const shipping = state.getShippingCost();
          return Number(((subtotal + shipping) * TAX_RATE).toFixed(2));
        },

        getTotal: () => {
          const state = get();
          return Number((
            state.getSubtotal() +
            state.getShippingCost() +
            state.getTaxAmount()
          ).toFixed(2));
        },

        getItemCount: () => {
          const state = get();
          return state.items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
        },
      };

      // Create a subscription to persist state changes
      store.subscribe((state) => {
        saveState({ items: state.items });
      });

      return baseState;
    };
  }

  select<S>(selector: (state: CartState) => S): Observable<S> {
    return this.useStore(selector);
  }
}
