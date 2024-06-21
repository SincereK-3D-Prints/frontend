import { Component } from '@angular/core';
import { ProductListComponent } from '../../e-commerce/product-list/product-list.component';
import { Product } from '../../e-commerce/product-list/product';

@Component({
  selector: 'shop-test',
  standalone: true,
  imports: [
    ProductListComponent
  ],
  templateUrl: './test.view.html',
  styleUrl: './test.view.scss'
})
export class TestView {
  products: Product[] = [
    {
      id: '1',
      image: "assets/images/blocks/ecommerce/productlist/product-list-2-1.png",
      name: "Product Name",
      price: 150.00,
      discount: 25
    },
    {
      id: '2',
      image: "assets/images/blocks/ecommerce/productlist/product-list-2-2.png",
      name: "Product Name",
      price: 150.00,
      discount: 10
    },
    {
      id: '3',
      image: "assets/images/blocks/ecommerce/productlist/product-list-2-3.png",
      name: "Product Name",
      price: 150.00,
      discount: 15
    },
    {
      id: '4',
      image: "assets/images/blocks/ecommerce/productlist/product-list-2-4.png",
      name: "Product Name",
      price: 150.00,
      discount: 20
    },
  ];
}
