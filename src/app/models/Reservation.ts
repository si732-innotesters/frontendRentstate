import {Property} from "./Property";
import {User} from "./User";

export interface Reservation {
  author: User;
  property: Property;
}
