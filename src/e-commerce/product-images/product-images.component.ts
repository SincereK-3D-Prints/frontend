import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { BACKEND_URL } from "../../environments/environment";

@Component({
  selector: 'shop-product-images',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './product-images.component.html',
  styleUrl: './product-images.component.scss'
})
export class ProductImagesComponent {
  @Input() images: string[] = [];
  @Input() name: string = 'Product Image';
  selectedImageIndex: number = 0;
  selectedImageIndex2: number = 0;

  mainImage(selectedImageIndex: number) {
    return `${BACKEND_URL}/images/${this.images[selectedImageIndex]}`;
  }

  thumbImage(image: string) {
    return `${BACKEND_URL}/images/${image}`;
  }
}
