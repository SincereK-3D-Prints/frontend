import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_URL } from '../../environments/environment';
import { Order } from './order.types';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private readonly apiUrl = `${BACKEND_URL}/api/stripe`;

  constructor(private http: HttpClient) {}

  createPaymentIntent(order: Partial<Order>): Observable<{ clientSecret: string }> {
    return this.http.post<{ clientSecret: string }>(`${this.apiUrl}/create-payment-intent`, order);
  }
}
