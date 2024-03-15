export interface ClientProfileInterface {
    success: boolean
    data: ClientProfileData
    message: string
  }
 export interface UpdatedClientProfileData extends ClientProfileData {
    country: string;
    languages: string[];
  }
  
  export interface ClientProfileData {
    _id: string
    uid: string
    company_data: any
    firstName: string
    lastName: string
    services: any[]
    rating: string
    profilePicture: string
    reviews: any[]
    country: string
    languages: any[]
    lastDelivery: any
    description: string
    messages: any[]
    devices: any[]
    collections: any[]
    twoFactorEnabled: boolean
    PaymentMethods: any[]
    role: string
    email: string
    isEmailVerified: boolean
    isAccountVerified: boolean
    userVerificationFiles: any[]
    status: string
    createdAt: string
    updatedAt: string
    services_count: number
    rating_data: RatingData
    reviews_data: ReviewsData
    commission_rate: any
    isDeleted: boolean
  }
  
  export interface RatingData {
    total_ratings_count: string
    avg_rating: string
  }
  
  export interface ReviewsData {
    total_reviews_count: string
    avg_reviews: string
  }

  export interface clientInfoData {
    success : boolean,
    data : ClientInfo,
    message : string
  }

  export type ClientInfo = {
    _id: string
    uid: string
    company_data: any
    firstName: string
    lastName: string
    services: Array<any>
    rating: string
    profilePicture: string
    reviews: Array<any>
    country: string
    languages: Array<string>
    lastDelivery: any
    description: string
    messages: Array<any>
    devices: Array<any>
    collections: Array<any>
    twoFactorEnabled: boolean
    PaymentMethods: Array<any>
    role: string
    email: string
    isEmailVerified: boolean
    isAccountVerified: boolean
    userVerificationFiles: Array<any>
    status: string
    createdAt: string
    updatedAt: string
    notification_settings: {
      notify_incoming_messages: {
        email: boolean
        sms: boolean
        _id: string
      }
      notify_reservation_updates: {
        email: boolean
        sms: boolean
        _id: string
      }
      notify_setting_changes: {
        email: boolean
        sms: boolean
        _id: string
      }
      createdAt: string
      updatedAt: string
    }
    services_count: number
    rating_data: {
      total_ratings_count: string
      avg_rating: string
    }
    reviews_data: {
      total_reviews_count: string
      avg_reviews: string
    }
    commission_rate: any
    isDeleted: boolean
  }
  
export interface ClientUpdatePayloadInterface {
  email?: string,
  current_password?: string,
    new_password?: string,
    description?: string,
    firstName?: string,
    lastName?: string,
    country?: string,
    languages?: string[],
    show_past_reservations?: boolean,
    remove_profile_image?: boolean,
    twoFactorEnabled?: boolean
  }
