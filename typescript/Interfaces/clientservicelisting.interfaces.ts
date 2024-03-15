export interface Root {
  success: boolean;
  message: string;
  data: ClientserviceLists[];
  limit: number;
  page: number;
  pages: number;
  total: number;
  grouped_counts: GroupedCounts;
}

export interface ClientserviceLists {
  _id: string;
  user_id: string;
  vendor_data: VendorData;
  package_pricing: number[];
  title: string;
  description: string;
  category: string;
  sub_category: string;
  images: string[];
  address: string;
  country: string;
  city: string;
  state: string;
  zip_code: string;
  excluded_areas: any[];
  rating_data: RatingData;
  operating_area: string;
  availability: Availability;
  booking_type: string;
  currency: string;
  createdAt: string;
  filterDate: string;
  updatedAt: string;
  status: string;
  isDeleted: boolean;
  is_favorite: boolean;
  current_availability: boolean | null;
}
export interface RatingData {
  total_count: string;
  avg_rating: string;
}

export interface VendorData {
  _id: string;
  uid: string;
  fullName: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  type: string;
}

export interface Availability {
  monday: Monday;
  tuesday: Tuesday;
  wednesday: Wednesday;
  thursday: Thursday;
  friday: Friday;
  saturday: Saturday;
  sunday: Sunday;
  _id?: string;
}

export interface Monday {
  is_available: boolean;
  time_slots: TimeSlot[];
  _id: string;
}

export interface TimeSlot {
  start_time: string;
  end_time: string;
  max_reservation: number;
  _id: string;
}

export interface Tuesday {
  is_available: boolean;
  time_slots: TimeSlot2[];
  _id: string;
}

export interface TimeSlot2 {
  start_time: string;
  end_time: string;
  max_reservation: number;
  _id: string;
}

export interface Wednesday {
  is_available: boolean;
  time_slots: TimeSlot3[];
  _id: string;
}

export interface TimeSlot3 {
  start_time: string;
  end_time: string;
  max_reservation: number;
  _id: string;
}

export interface Thursday {
  is_available: boolean;
  time_slots: TimeSlot4[];
  _id: string;
}

export interface TimeSlot4 {
  start_time: string;
  end_time: string;
  max_reservation: number;
  _id: string;
}

export interface Friday {
  is_available: boolean;
  time_slots: TimeSlot5[];
  _id: string;
}

export interface TimeSlot5 {
  start_time: string;
  end_time: string;
  max_reservation: number;
  _id: string;
}

export interface Saturday {
  is_available: boolean;
  time_slots: TimeSlot6[];
  _id: string;
}

export interface TimeSlot6 {
  start_time: string;
  end_time: string;
  max_reservation: number;
  _id: string;
}

export interface Sunday {
  is_available: boolean;
  time_slots: TimeSlot7[];
  _id?: string;
}

export interface TimeSlot7 {
  start_time: string;
  end_time: string;
  max_reservation: number;
  _id: string;
}

export interface GroupedCounts {
  all: number;
  company: number;
  individual: number;
}
