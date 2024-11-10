import { Injectable } from "@angular/core";
import { Cart, CartItem } from "./cart.types";
import { Observable } from "rxjs";
import { CartStore } from "../stores/cart.store";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private store: CartStore) {}
}
