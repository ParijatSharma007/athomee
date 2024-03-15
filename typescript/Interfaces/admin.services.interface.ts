export interface ServiceInfoResponse {
  success: boolean;
  message: string;
  data: ServiceData;
  ratings_data: {
    totalCount: number,
    totalAverageRating: number,
    ratings: [
        {
            count: number,
            rating: number
        },
        {
            count: number,
            rating: number
        },
        {
            count: number,
            rating: number
        },
        {
            count: number,
            rating: number
        },
        {
            count: number,
            rating: number
        }
    ]
}
}
interface Rule {
  name: string;
  description: string;
  _id: string;
  title:string
}


export interface ServiceData {
    _id: string
    user_id: string
    vendor_data: {
      _id: string
      uid: string
      firstName: string
      lastName: string
      profilePicture: string
      type: string
      country: string
      languages: Array<any>
      createdAt: string
      lastDelivery: any
      replyTime : string
    }
    cover_image : string
    availability: {
      monday: {
        is_available: boolean
        time_slots: Array<any>
        _id: string
      }
      tuesday: {
        is_available: boolean
        time_slots: Array<any>
        _id: string
      }
      wednesday: {
        is_available: boolean
        time_slots: Array<{
          start_time: string
          end_time: string
          max_reservation: number
          _id: string
        }>
        _id: string
      }
      thursday: {
        is_available: boolean
        time_slots: Array<any>
        _id: string
      }
      friday: {
        is_available: boolean
        time_slots: Array<any>
        _id: string
      }
      saturday: {
        is_available: boolean
        time_slots: Array<any>
        _id: string
      }
      sunday: {
        is_available: boolean
        time_slots: Array<{
          start_time: string
          end_time: string
          max_reservation: number
          _id: string
        }>
      }
    }
    unavailability: Array<string>
    unavailable_weekdays: Array<number>
    category_title: string
    sub_category_title: string
    packages_data: Array<{
      _id: string
      name: string
      description: string
      duration: string
      features: Array<{
        name: string
        is_available: boolean
        _id: string
      }>
      rate: number
    }>
    title: string
    packages: Array<string>
    description: string
    category: string
    sub_category: string
    images: Array<any>
    address: string
    country: string
    city: string
    state: string
    zip_code: string
    excluded_areas: Array<any>
    operating_area: string
    booking_type: string
    rules: Rule[]
    cancellation_policy: {
      type: string
      description: string
    }
    currency: string
    createdAt: string
    updatedAt: string
    status: string
    isDeleted: boolean

    rating_data: {
      total_count: number,
      avg_rating: number
  }
}

export interface Availability {
  monday: Monday
  tuesday: Tuesday
  wednesday: Wednesday
  thursday: Thursday
  friday: Friday
  saturday: Saturday
  sunday: Sunday
  _id: string
}

export interface Monday {
  is_available: boolean
  time_slots: TimeSlot[]
  _id: string
}

export interface TimeSlot {
  start_time: string
  end_time: string
  max_reservation: number
  _id: string
}

export interface Tuesday {
  is_available: boolean
  time_slots: TimeSlot2[]
  _id: string
}

export interface TimeSlot2 {
  start_time: string
  end_time: string
  max_reservation: number
  _id: string
}

export interface Wednesday {
  is_available: boolean
  time_slots: TimeSlot3[]
  _id: string
}

export interface TimeSlot3 {
  start_time: string
  end_time: string
  max_reservation: number
  _id: string
}

export interface Thursday {
  is_available: boolean
  time_slots: TimeSlot4[]
  _id: string
}

export interface TimeSlot4 {
  start_time: string
  end_time: string
  max_reservation: number
  _id: string
}

export interface Friday {
  is_available: boolean
  time_slots: TimeSlot5[]
  _id: string
}

export interface TimeSlot5 {
  start_time: string
  end_time: string
  max_reservation: number
  _id: string
}

export interface Saturday {
  is_available: boolean
  time_slots: TimeSlot6[]
  _id: string
}

export interface TimeSlot6 {
  start_time: string
  end_time: string
  max_reservation: number
  _id: string
}

export interface Sunday {
  is_available: boolean
  time_slots: TimeSlot7[]
  _id: string
}

export interface TimeSlot7 {
  start_time: string
  end_time: string
  max_reservation: number
  _id: string
}

interface VendorData {
  _id: string;
  uid: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  type: string;
}

interface timetable {
  _id: string;
  is_available: boolean;
  name: string;
}

interface PackageData {
  _id: string;
  name: string;
  description: string;
  duration: string;
  features: timetable[];
  rate: number;
}

interface CancellationPolicy {
  type: string;
  description: string;
}

export interface IUpdateServiceBody {
  title?: string;
  category?: string;
  sub_category?: string;
  description?: string;
  address?: string;
  country?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  excluded_areas?: string[];
  operating_area?: string;
  packages?: any[];
  availability?: {
    [key: string]: any;
  };
  images?: string[];
  images_remove?: string[];
  cancellation_policy?: {
    [key: string]: any;
  };
  rules?: string[];
  booking_type?: string;
}
