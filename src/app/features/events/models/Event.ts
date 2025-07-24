export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  imageUrl?: string;
  capacity?: number;
  userId: number;
}
