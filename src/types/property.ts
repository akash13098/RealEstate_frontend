export interface Property {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  location: string;
  address: string;
  bhk: number;
  area: number;
  type: string;
  category: string;
  tower: string;
  developer: string;
  floor: string;
  images: string[];
  rent: string;
  amenities: string[];
  description: string;
  nearby: string[];
  forSale: boolean;
  forRent: boolean;
}
