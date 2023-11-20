import {Property} from "./Property";
import {User} from "./User";

export interface Post {
  id: number
  title: string
  price: number
  property:Property
  author:User
  editMode:boolean
}
