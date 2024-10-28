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
import { Product } from '../../product-list/product';
import { ProductListComponent } from '../../product-list/product-list.component';
import { HttpClient } from "@angular/common/http";
import { BACKEND_URL } from '../../../environments/environment';
import { ActivatedRoute, Router } from "@angular/router";
import { TricolorCircleComponent } from "../../../components/tricolor-circle/tricolor-circle.component";

interface size {
  label: string,
  value: string
}

@Component({
  selector: 'shop-product',
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
  templateUrl: './product.view.html',
  styleUrl: './product.view.scss'
})
export class ProductView implements OnInit {
  color: string = 'rainbow sparkle';
  liked: boolean = false;
  quantity: number = 1;
  selectedImageIndex: number = 3;
  selectedImageIndex2: number = 3;
  size: string = 'M';
  product = {
    name: 'Product Title Placeholder',
    price: [0],
    colors: [] as string[],
    images: [] as string[],
    sizes: [] as string[],
    shipping_cost: '0.00',
    description: ''
  };
  products: Product[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.http.get(`${BACKEND_URL}/api/products/slug/${slug}`)
      .subscribe((data: any) => {
        console.log('Response:', data);
        this.product = data.product;
      });

    this.products = [
      {
        id: '1',
        image: "assets/images/blocks/ecommerce/productlist/product-list-2-1.png",
        name: "Product 1",
        price: 125.00,
        discount: 25
      },
      {
        id: '2',
        image: "assets/images/blocks/ecommerce/productlist/product-list-2-2.png",
        name: "Product 2",
        price: 150.00,
        discount: 10
      },
      {
        id: '3',
        image: "assets/images/blocks/ecommerce/productlist/product-list-2-3.png",
        name: "Product 3",
        price: 175.00,
        discount: 15
      },
      {
        id: '4',
        image: "assets/images/blocks/ecommerce/productlist/product-list-2-4.png",
        name: "Product 4",
        price: 250.00,
        discount: 20
      },
    ];
  }

  sizePrice(): number {
    const index = this.product.sizes.indexOf(this.size);
    return this.product.price[index];
  }
}
