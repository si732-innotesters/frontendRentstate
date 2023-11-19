export interface User {
  id: number;
  name: string;
  lastName: string;
  age: number;
  gender: string;
  description: string;
  isPremium: boolean;
  photoUrl:string
  rankPoints?:number
}
