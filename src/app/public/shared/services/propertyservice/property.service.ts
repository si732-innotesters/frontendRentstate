import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "../../../../models/Property";
import {BaseService} from "../base/base.service";
import {UserService} from "../userservice/user.service";

@Injectable({
  providedIn: 'root'
})
export class PropertyService extends BaseService<Property>{

  userLoguedId!:number
  constructor(private _http:HttpClient,
              private _userService:UserService) {
    super(_http)
    this.resourceEndPoint='/api/v1/properties'
    this.userLoguedId = this._userService.getIdUserLoged();
  }

  getAllByAuthorId(id:number){
    return  this._http.get(`${this.resourcePath()}/author/${id}`)
  }

  addReservation(propertyId: number, userId: number) {
    return this._http.post(
      `${this.resourcePath()}/reservation/property-id/${propertyId}/user-id/${userId}/add`,'')
  }

  removeReservation(propertyId:number, userId:number){
    return  this._http.post(
      `${this.resourcePath()}/reservation/property-id/${propertyId}/user-id/${userId}/remove`,'')
  }
  acceptReservation(propertyId:number, userId:number){
    return  this._http.post(
      `${this.resourcePath()}/reservation/property-id/${propertyId}/user-id/${userId}/accept`,'')
  }


  //clients
  getAllClient(){
    return this._http.get(`${this.resourcePath()}/get-clients/${this.userLoguedId}`);
  }
  removeRenter(propertyId:number){
    return this._http.put(`${this.resourcePath()}/remove-renter/${propertyId}`,"")
  }
}
