import { Component, OnInit } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { CurrencyPipe, NgClass, TitleCasePipe } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ProductImagesComponent } from '../../product-images/product-images.component';
import { BreadCrumbsComponent } from '../../bread-crumbs/bread-crumbs.component';
import { ProductListComponent } from '../../product-list/product-list.component';
import { HttpClient } from "@angular/common/http";
import { BACKEND_URL } from '../../../environments/environment';
import { ActivatedRoute, Router } from "@angular/router";
import { TricolorCircleComponent } from "../../../components/tricolor-circle/tricolor-circle.component";
import { MessageService } from "primeng/api";
import { CartItem } from "../../services/cart.types";
import { CartStore } from "../../stores/cart.store";

enum Sizes {
  S = 'S',
  M = 'M',
  L = 'L'
}

interface Product {
  id: number,
  name: string,
  slug: string,
  price: number[],
  colors: string[],
  images: string[],
  sizes: Sizes[],
  shipping_cost: string | number,
  description: string
}

@Component({
  selector: 'shop-product-view',
  standalone: true,
  imports: [
    RippleModule,
    StyleClassModule,
    NgClass,
    InputNumberModule,
    ButtonModule,
    FormsModule,
    TabViewModule,
    ProductImagesComponent,
    BreadCrumbsComponent,
    CurrencyPipe,
    ProductListComponent,
    TricolorCircleComponent,
    TitleCasePipe,
  ],
  providers: [CartStore],
  templateUrl: './product.view.html',
  styleUrl: './product.view.scss'
})
export class ProductView implements OnInit {
  color: string = 'rainbow sparkle';
  quantity: number = 1;
  size: string = 'M';
  product: Partial<Product> = {
    name: 'Product Title Placeholder',
    price: [0],
    colors: [],
    images: [],
    sizes: [],
    shipping_cost: '0.00',
    description: ''
  };

  constructor(
    private cart: CartStore,
    private http: HttpClient,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.http.get(`${BACKEND_URL}/api/products/slug/${slug}`)
      .subscribe((data: any) => {
        console.log('Response:', data);
        this.product = data.product as Product;
        this.product.images = this.product.images!.slice(0, 4);
      });
  }

  sizePrice(): number {
    const index = this.product.sizes!.indexOf(this.size as Sizes);
    return this.product.price![index];
  }

  addToCart() {
    const cartItem: CartItem = {
      id: this.product.id!,
      name: this.product.name!,
      image: this.product.images![0],
      displayName: `${this.product.name} - ${this.color}`,
      price: this.sizePrice(),
      quantity: this.quantity,
      shipping_cost: typeof this.product.shipping_cost === 'string'
        ? parseFloat(this.product.shipping_cost)
        : this.product.shipping_cost!,
      options: {
        size: this.size,
        color: this.color
      }
    };

    this.cart.add(cartItem);
    this.messageService.add({
      severity: 'success',
      summary: 'Added to Cart',
      detail: `${cartItem.displayName} has been added to your cart`
    });
    this.router.navigate([ '/checkout' ]);
  }
}
