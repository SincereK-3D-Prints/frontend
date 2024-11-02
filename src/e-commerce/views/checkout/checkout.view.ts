import { Component, OnInit } from "@angular/core";
import { CheckboxModule } from "primeng/checkbox";
import { DividerModule } from "primeng/divider";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe, NgClass, TitleCasePipe } from "@angular/common";
import { RadioButtonModule } from "primeng/radiobutton";
import { MessageModule } from "primeng/message";
import { KeyFilterModule, KeyFilterPattern } from "primeng/keyfilter";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonDirective } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { Ripple } from "primeng/ripple";
import { OrderService } from "../../services/order.service";
import { CartService } from "../../services/shopping-cart.service";
import { CartItem } from "../../services/shopping-cart.types";
import { BACKEND_URL } from "../../../environments/environment";
import { Order } from "../../services/order.types";
import { MessageService } from "primeng/api";

@Component({
  selector: 'shop-checkout-view',
  templateUrl: './checkout.view.html',
  styleUrls: [ './checkout.view.scss' ],
  imports: [
    CheckboxModule,
    DividerModule,
    FormsModule,
    NgClass,
    RadioButtonModule,
    MessageModule,
    KeyFilterModule,
    InputTextModule,
    PasswordModule,
    ButtonDirective,
    InputNumberModule,
    Ripple,
    CurrencyPipe,
    TitleCasePipe
  ],
  providers: [CartService, MessageService, OrderService],
  standalone: true
})
export class CheckoutView implements OnInit {
  checked: any;
  selectedValue2: string | undefined;
  cc: any;
  ccRegex: any;
  expRegex: any;
  cvc: any;
  cvcRegex: RegExp | KeyFilterPattern | null | undefined;
  value3: any;
  exp: any;
  quantities1: any;

  order: Partial<Order> = {
    email: '',
    carrier: 'USPS',
    shipping_info: {
      first_name: '',
      last_name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      postal_code: '',
      country: 'United States'
    },
    billing_info: {
      first_name: '',
      last_name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      postal_code: '',
      country: 'United States'
    },
    products: [],
    total: 0,
    subtotal: 0
  };
  items: CartItem[] = [];
  total: number = 0;
  subtotal: number = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.items = this.cartService.items as CartItem[];
  }

  thumbImage(image: string) {
    return `${BACKEND_URL}/images/${image}`;
  }

  updateItem(item: CartItem) {
    // this.cartService.updateQuantity(item);
    // this.calculateTotals();
  }
}
