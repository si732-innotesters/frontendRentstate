import {Property} from "./Property";

export interface Client {
  name: string
  lastName: number
  gender: number
  isAsset:boolean
  property:Property
  createdAt:Date
}
