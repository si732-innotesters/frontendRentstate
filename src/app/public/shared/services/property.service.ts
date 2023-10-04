import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "../../../models/Property";
import {BaseService} from "./base/base.service";

@Injectable({
  providedIn: 'root'
})
export class PropertyService extends BaseService<Property>{


  constructor(private _http:HttpClient) {
    super(_http)
    this.resourceEndPoint='/Properties'
  }

}
