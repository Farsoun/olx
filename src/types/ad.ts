export interface Ad {
  id: string;
  title: string;
  price: number;
  image: string;
  year: number;
  mileage: number;
  fuel: string;
  location: string;
  time: string;
  isVerified?: boolean;
  isElite?: boolean;
}