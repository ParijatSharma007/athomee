export interface ClientSavedListInterface {
  success: boolean;
  data: ClientSavedLists[];
  message: string;
}

export interface ClientSavedLists {
  _id: string;
  user_id: string;
  services: any[];
  services_data: ServicesDaum[];
  name: string;
  isDeleted: boolean;
}

export interface ServicesDaum {
  _id: string
  user_id: string
  vendor_data: VendorData
  package_pricing: number[]
  price_low: number
  price_high: number
  title: string
  description: string
  category: string
  sub_category: string
  images: any[]
  cover_image: string
  rating_data: RatingData
  address: string
  currency: string
  createdAt: string
  updatedAt: string
  status: string
  isDeleted: boolean
}

export interface VendorData {
  _id: string
  uid: string
  fullName: string
  firstName: string
  lastName: string
  profilePicture: string
  type: string
  country: string
  replyTime: string
  languages: any[]
  createdAt: string
  lastDelivery: any
  lastOnline: string
}

export interface RatingData {
  total_count: number
  avg_rating: number
}
