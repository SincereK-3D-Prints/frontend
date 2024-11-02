import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./views/coming-soon/coming-soon.view').then(x => x.ComingSoonView) },
  { path: 'coming-soon', loadComponent: () => import('./views/coming-soon/coming-soon.view').then(x => x.ComingSoonView) },
  { path: 'home', loadComponent: () => import('./views/home/home.view').then(x => x.HomeView) },
  { path: 'products', loadComponent: () => import('./e-commerce/views/products/products.view').then(x => x.ProductsView) },
  { path: 'products/:slug', loadComponent: () => import('./e-commerce/views/product/product.view').then(x => x.ProductView) },
  { path: 'checkout', loadComponent: () => import('./e-commerce/views/checkout/checkout.view').then(x => x.CheckoutView) },
];
