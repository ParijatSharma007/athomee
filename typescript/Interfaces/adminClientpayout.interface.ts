export interface Root {
  success: boolean;
  message: string;
  data: AdminClientpayouts[];
  limit: number;
  page: number;
  pages: number;
  total: number;
  grouped_counts: GroupedCounts;
}

export interface AdminClientpayouts {
  _id: string;
  reservation_id: string;
  date: string;
  filterDate: string;
  currency: string;
  amount: number;
  type: string;
  client_data: ClientData;
  vendor_data: VendorData;
  payment_method_details: PaymentMethodDetails;
  transaction_id: string;
  stripe_payment_method_id: string;
  stripe_invoice_id: string;
  stripe_charge_id: string;
  stripe_refund_id: string;
  status: string;
  isDeleted: boolean;
  show_decline_option: boolean;
}

export interface ClientData {
  _id: string;
  uid: string;
  type: string;
  fullName: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

export interface VendorData {
  _id: string;
  type: string;
  uid: string;
  fullName: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

export interface PaymentMethodDetails {
  type: string;
  email: string;
  last4: string;
  network: string;
}

export interface GroupedCounts {
  all: number;
  Payouts: number;
  Refunds: number;
  Reservations: number;
}
