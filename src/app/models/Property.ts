export interface Property {
  id?: number;
  authorId: number;
  name: string;
  urlImg:string;
  description: string;
  characteristics: string;
  location: string;
  category: string;
  available: boolean;
  renterId?: number;
}
