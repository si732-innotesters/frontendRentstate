import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../../../../public/shared/services/propertyservice/property.service";
import {UserService} from "../../../../public/shared/services/userservice/user.service";
import {Property} from "../../../../models/Property";
import {Reservation} from "../../../../models/Reservation";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{

  properties:Property[]=[]
  reservations:Reservation[]=[]

  constructor(private _propertyService:PropertyService,
              private _userService:UserService) {
  }

  ngOnInit(): void {
    this.getMyReservationByPorperties()
  }

  getMyReservationByPorperties() {
    this._propertyService.getAllByAuthorId(this._userService.getIdUserLoged()).subscribe((data: any) => {
      this.properties = data;

      this.properties.forEach(property => {
        if (property.reservedUsers.length > 0) {
          property.reservedUsers.forEach(user => {
            const reservation = { author: user, property: property };
            this.reservations.push(reservation);
          });
        }
      });
    });
  }


}
