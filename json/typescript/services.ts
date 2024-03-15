export type ServicePackage = {
  description: string;
  duration: string;
  features: string[];
  name: string;
  rate: number;
  _id: string;
};
export type ServiceRule = {
  description: string;
  name: string;
  _id: string;
};

export type VendorData = {
  _id: string;
  uid: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
};
export type CancellationPolicy = {
  type: string;
  description: string;
  _id: string;
};
export type ServiceInfo = {
  address: string;
  booking_type: string;
  cancellation_policy: CancellationPolicy;
  category: string;
  category_title: string;
  city: string;
  country: string;
  createdAt: string;
  currency: string;
  description: string;
  excluded_areas: any[]; // Adjust type as needed
  images: string[];
  isDeleted: boolean;
  operating_area: string;
  packages: string[];
  packages_data: ServicePackage[];
  rules: ServiceRule[];
  state: string;
  status: string;
  sub_category: string;
  title: string;
  updatedAt: string;
  user_id: string;
  vendor_data: VendorData;
  zip_code: string;
  _id: string;
};

export type GroupedCounts = {
  all: number;
  company: number;
  individual: number;
};

export type ServiceResponse = {
  data: ServiceInfo[];
  limit: number;
  message: string;
  page: number;
  pages: number;
  success: boolean;
  total: number;
  grouped_counts:GroupedCounts
};

export type SubCategory ={
  name: string
  _id: string
  total_services: number
}
export type Daum ={
  _id: string
  name: string
  sub_categories: SubCategory[]
  total_services: number
  order_num: number
  isDeleted: boolean
  status: string
}
export type CategoryResponse ={
  success: boolean
  data: Daum[] |[]
  message: string
}