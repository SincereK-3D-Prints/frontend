import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shop-bread-crumbs',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss'
})
export class BreadCrumbsComponent {
  @Input() routes: MenuItem[] = [
    { label: 'Test', url: '/test' },
    { label: 'Product', url: '/product' }
  ];
}
