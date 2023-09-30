import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string="https://logicminds-server.onrender.com/Users"

  constructor(private _http:HttpClient) {

  }
  getAllUsers(){
    return this._http.get<User>(this.baseUrl);
  }

  getUserById(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<User>(url);
  }

  addUser(data:any){
    return this._http.post(this.baseUrl,data);
  }

  updateUser(id:number, data:User){
    const url = `${this.baseUrl}/${id}`;
    return this._http.put(url,data);
  }

}
