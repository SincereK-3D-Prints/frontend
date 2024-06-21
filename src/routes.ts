import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./views/coming-soon/coming-soon.view').then(x => x.ComingSoonView) },
  { path: 'coming-soon', loadComponent: () => import('./views/coming-soon/coming-soon.view').then(x => x.ComingSoonView) },
  { path: 'home', loadComponent: () => import('./views/home/home.view').then(x => x.HomeView) },
  { path: 'test', loadComponent: () => import('./views/test/test.view').then(x => x.TestView) },
  { path: 'product', loadComponent: () => import('./e-commerce/views/product/product.view').then(x => x.ProductView) },
];
