export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  imageUrl?: string;
  capacity?: number;
  user: User;
}
