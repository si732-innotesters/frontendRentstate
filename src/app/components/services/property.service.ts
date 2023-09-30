import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "../../models/Property";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  baseUrl: string="https://logicminds-server.onrender.com/Properties";

  constructor(private _http:HttpClient) {}

  getAllProperties(){
    return this._http.get<Property>(this.baseUrl);
  }
  getPropertyById(id:number){
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<Property>(url);
  }

  addProperty(data:Property){
    return this._http.post(this.baseUrl,data);
  }

  updateProperty(id:number, property:Property){
    const url = `${this.baseUrl}/${id}`;
    return this._http.put(url,property);
  }
  deletePropertyById(id:number){
    const url = `${this.baseUrl}/${id}`;
    return this._http.delete<Property>(url)
  }
}
