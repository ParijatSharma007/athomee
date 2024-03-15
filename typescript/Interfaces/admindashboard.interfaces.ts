export interface TopCategory {
  success: boolean;
  data: TopCategoryData[];
  message: string;
}

export interface TopCategoryData {
  _id: string;
  amount: number;
  category_name: string;
}


export interface UserListRoot {
  success: boolean
  data: UserList
  message: string
}

export interface UserList {
  total_count: number
  growth_percentage: number
}
