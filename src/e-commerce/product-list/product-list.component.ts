import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { CurrencyPipe, NgClass, NgForOf, NgStyle } from '@angular/common';
import { Product } from './product';

@Component({
  selector: 'shop-product-list',
  standalone: true,
  imports: [
    RippleModule,
    NgStyle,
    NgClass,
    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() toCart = new EventEmitter<Product>();

  getColorClass(color: string) {
    return {
      [`bg-${color.toLowerCase()}-500`]: true,
      [`hover:border-${color.toLowerCase()}-500`]: true
    };
  }

  getColorStyle(product: any, color: string) {
    return {
      'box-shadow': product.color === color ? `0 0 0 0.2rem var(--${color.toLowerCase()}-500)` : null
    };
  }

  discountPrice({ price = 0, discount = 0, discount_type = 'percent' }: Product) {
    if (discount_type === 'flat') {
      return price - discount;
    }
    return price - (price * discount / 100);
  }

  addToCart($event: MouseEvent, product: Product) {
    $event.stopPropagation();
    this.toCart.emit(product);
  }
}
