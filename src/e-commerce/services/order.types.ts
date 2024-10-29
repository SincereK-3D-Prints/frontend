export type ShippingStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'failed' | 'returned';

export interface OrderProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  shipping_cost: number;
  options?: {
    size?: string;
    color?: string;
    [key: string]: any;
  };
}

export interface ShippingInfo {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone?: string;
}

export interface BillingInfo extends ShippingInfo {
  email?: string;
  name?: string;
}

export interface Order {
  id?: number;
  email: string;
  status: string;
  shipping_status: ShippingStatus;
  tracking_number?: string;
  carrier?: string;
  products: OrderProduct[];
  subtotal: number;
  shipping_cost: number;
  tax: number;
  total: number;
  shipping_info: ShippingInfo;
  billing_info: BillingInfo;
  processor: string;
  processor_order_id?: string;
  processor_status?: string;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface ShippingUpdate {
  shipping_status: ShippingStatus;
  tracking_number?: string;
  carrier?: string;
}
