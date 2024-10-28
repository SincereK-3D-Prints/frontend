import { Component, Input, OnInit } from '@angular/core';
import { BreadCrumbsComponent } from "../../bread-crumbs/bread-crumbs.component";
import { HttpClient } from "@angular/common/http";
import { BACKEND_URL } from "../../../environments/environment";
import { CurrencyPipe, TitleCasePipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'shop-products-view',
  standalone: true,
  imports: [
    BreadCrumbsComponent,
    TitleCasePipe,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './products.view.html',
  styleUrl: './products.view.scss'
})
export class ProductsView implements OnInit {
  @Input() breadcrumbs: boolean = true;
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(`${BACKEND_URL}/api/products`)
      .subscribe(({ products }) => {
        console.log('Products:', products);
        this.products = products;
      });
  }

  thumbImage(image: string) {
    return `${BACKEND_URL}/images/${image}`;
  }
}
