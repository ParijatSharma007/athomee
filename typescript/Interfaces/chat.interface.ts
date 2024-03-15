export interface ChatReciverIDtype {
  receiver_id: string;
}

export interface CreateRoomInterface {
  creator_id: string;
  receiver_id: string;
  last_message: string;
  receiver_unread_count: number;
  creator_unread_count: number;
  isDeleted: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


export interface ChatmessageInterface {
  success: boolean
  message: string
  data: ChatmessageDetails[]
  limit: number
  page: number
  pages: number
  total: number
}

export interface ChatmessageDetails {
  _id: string
  room_id: string
  sender_id: string
  image: any[]
  text: string
  chat_date: string
  sender_data: ChatSenderData
  isDeleted: boolean
}

export interface ChatSenderData {
  _id: string
  uid: string
  firstName: string
  lastName: string
  profilePicture: string
}
