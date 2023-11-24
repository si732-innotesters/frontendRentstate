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
    this.getMyReservations()
  }

  getMyReservations() {
    this.reservations=[]
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

  cancelReservation(propertyId: number, authorId: number) {
    this._propertyService.removeReservation(propertyId, authorId).subscribe(() => {
      this.reservations = this.reservations.filter(reservation =>
        reservation.property.id !== propertyId || reservation.author.id !== authorId
      );
    });
  }

  acceptReservation(propertyId: number, authorId: number) {
    this._propertyService.acceptReservation(propertyId,authorId).subscribe(()=>{
      this.getMyReservations();
    })
  }
}
