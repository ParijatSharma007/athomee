export interface ChatUserInterface {
  success: boolean;
  message: string;
  data: ChatUserData[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export interface ChatUserData {
  _id: string;
  creator_id: string;
  service_data: ChatUserServiceData;
  user_data: UserData;
  isDeleted: boolean;
}

export interface ChatUserServiceData {}

export interface UserData {
  _id: string;
  uid: string;
  firstName: string;
  lastOnline: Date;
  isOnline: boolean;
  lastName: string;
  profilePicture: string;
}
