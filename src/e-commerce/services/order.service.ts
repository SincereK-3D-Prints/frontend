import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Order, ShippingUpdate } from './order.types';
import { BACKEND_URL } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly apiUrl = `${BACKEND_URL}/api/orders`;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error.message || `Error Code: ${error.status}`;
    }

    console.error('OrderService Error:', error);
    return throwError(() => new Error(errorMessage));
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<{ orders: Order[] }>(this.apiUrl).pipe(
      map(response => response.orders),
      catchError(this.handleError)
    );
  }

  getOrdersByEmail(email: string): Observable<Order[]> {
    return this.http.get<{ orders: Order[] }>(`${this.apiUrl}/email/${email}`).pipe(
      map(response => response.orders),
      catchError(this.handleError)
    );
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<{ order: Order }>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.order),
      catchError(this.handleError)
    );
  }

  createOrder(order: Order): Observable<Order> {
    const formattedOrder = {
      ...order,
      products: JSON.stringify(order.products),
      shipping_info: JSON.stringify(order.shipping_info),
      billing_info: JSON.stringify(order.billing_info)
    };

    return this.http.post<{ order: Order }>(this.apiUrl, formattedOrder).pipe(
      map(response => response.order),
      catchError(this.handleError)
    );
  }

  updateOrder(id: number, order: Partial<Order>): Observable<Order> {
    const formattedOrder: any = { ...order };
    if (order.products) {
      formattedOrder.products = JSON.stringify(order.products);
    }
    if (order.shipping_info) {
      formattedOrder.shipping_info = JSON.stringify(order.shipping_info);
    }
    if (order.billing_info) {
      formattedOrder.billing_info = JSON.stringify(order.billing_info);
    }

    return this.http.put<{ order: Order }>(`${this.apiUrl}/${id}`, formattedOrder).pipe(
      map(response => response.order),
      catchError(this.handleError)
    );
  }

  updateShipping(id: number, shippingUpdate: ShippingUpdate): Observable<Order> {
    return this.http.patch<{ order: Order }>(
      `${this.apiUrl}/${id}/shipping`,
      shippingUpdate
    ).pipe(
      map(response => response.order),
      catchError(this.handleError)
    );
  }

  updateProcessorStatus(id: number, processorStatus: string): Observable<Order> {
    return this.http.patch<{ order: Order }>(
      `${this.apiUrl}/${id}/processor-status`,
      { processor_status: processorStatus }
    ).pipe(
      map(response => response.order),
      catchError(this.handleError)
    );
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  calculateOrderTotals(order: Partial<Order>): { subtotal: number; shipping_cost: number; tax: number; total: number } {
    const products = order.products || [];
    const subtotal = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const shipping_cost = products.reduce((sum, product) => sum + (product.shipping_cost || 0), 0);
    const tax = (subtotal + shipping_cost) * 0.1; // Assuming 10% tax rate, adjust as needed
    const total = subtotal + shipping_cost + tax;

    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      shipping_cost: parseFloat(shipping_cost.toFixed(2)),
      tax: parseFloat(tax.toFixed(2)),
      total: parseFloat(total.toFixed(2))
    };
  }
}
