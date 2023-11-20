import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "../../../../models/Property";
import {BaseService} from "../base/base.service";

@Injectable({
  providedIn: 'root'
})
export class PropertyService extends BaseService<Property>{


  constructor(private _http:HttpClient) {
    super(_http)
    this.resourceEndPoint='/api/v1/properties'
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

}
