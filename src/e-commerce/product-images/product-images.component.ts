import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

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
  selectedImageIndex: number = 0;
  selectedImageIndex2: number = 0;
}
