import { Injectable } from '@angular/core';
import { ZustandBaseService } from 'ngx-zustand';
import { StateCreator } from 'zustand/vanilla';
import { CartState, CartItem } from '../services/shopping-cart.types';
import { Observable } from 'rxjs';

const STORAGE_KEY = 'shopping-cart';

type PersistedState = Pick<CartState, 'items'>;

const loadState = (): PersistedState => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : { items: [] };
  } catch {
    return { items: [] };
  }
};

const saveState = (state: PersistedState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving cart state:', error);
  }
};

const TAX_RATE = 0.1;

@Injectable({ providedIn: 'root' })
export class CartStore extends ZustandBaseService<CartState> {

  initStore(): StateCreator<CartState> {
    return (set, get) => ({
      items: loadState().items,

      addItem: (product: CartItem) => set((state: CartState) => {
        const existingItem = state.items.find(
          (item: CartItem) =>
            item.id === product.id &&
            JSON.stringify(item.selectedOptions) === JSON.stringify(product.selectedOptions)
        );

        const newState: PersistedState = existingItem
          ? {
            items: state.items.map((item: CartItem) =>
              item === existingItem
                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                : item
            )
          }
          : {
            items: [...state.items, { ...product, quantity: product.quantity || 1 }]
          };

        saveState(newState);
        return newState;
      }),

      removeItem: (productId: number) => set((state: CartState) => {
        const newState: PersistedState = {
          items: state.items.filter((item: CartItem) => item.id !== productId)
        };
        saveState(newState);
        return newState;
      }),

      updateQuantity: (productId: number, quantity: number) => set((state: CartState) => {
        const newState: PersistedState = {
          items: state.items.map((item: CartItem) =>
            item.id === productId
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ).filter((item: CartItem) => item.quantity > 0)
        };
        saveState(newState);
        return newState;
      }),

      updateOptions: (productId: number, options: CartItem['selectedOptions']) =>
        set((state: CartState) => {
          const newState: PersistedState = {
            items: state.items.map((item: CartItem) =>
              item.id === productId
                ? { ...item, selectedOptions: { ...item.selectedOptions, ...options } }
                : item
            )
          };
          saveState(newState);
          return newState;
        }),

      clearCart: () => set(() => {
        const newState: PersistedState = { items: [] };
        saveState(newState);
        return newState;
      }),

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
    });
  }

  select<S>(selector: (state: CartState) => S): Observable<S> {
    return this.useStore(selector);
  }
}
