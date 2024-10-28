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
  @Input() home: MenuItem = { label: 'Home', url: '/' };
  @Input() routes: MenuItem[] = [
    { label: 'Products', url: '/products' }
  ];
  @Input() active: String|MenuItem = '';

  get current() {
    if (typeof this.active === 'object') {
      return (this.active as MenuItem).label;
    }
    return this.active;
  }
}
