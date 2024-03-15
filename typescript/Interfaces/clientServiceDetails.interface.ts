export type ClientServiceDetailsInterface = {
    success: boolean
    message: string
    data: {
      _id: string
      user_id: string
      vendor_data: {
        _id: string
        uid: string
        firstName: string
        lastName: string
        profilePicture: string
        type: string
      }
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
      rules: Array<any>
      cancellation_policy: {
        type: string
        description: string
      }
      currency: string
      createdAt: string
      updatedAt: string
      status: string
      isDeleted: boolean
    }
  }