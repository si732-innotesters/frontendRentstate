import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../../models/User";
import {BaseService} from "../base/base.service";
import {RegisterModel} from "./resource/RegisterModel";
import {environment} from "../../../../envieonments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  userId:number
  token!:string
  constructor(private _http:HttpClient) {
    super(_http)
    this.resourceEndPoint = this.resourceEndPoint + '/users';

    this.userId = this.getIdUserLoged()
    this.token = this.getToken()
  }

  addRating(item:any){
    console.log(item)
    return this._http.post(`${environment.serverBasePath}/api/v1/ratings`, item)
  }





  public register(registerModel:RegisterModel){
    return this._http.post(`${environment.serverBasePath}/auth/api/register`,registerModel);
  }
  public login(credentials:any){
    return this._http.post(`${environment.serverBasePath}/auth/api/login`,credentials);
  }

  automaticLogin(data:any){
    window.sessionStorage.setItem("token",data.token)
    window.sessionStorage.setItem("userId",data.userId)
  }
  getIdUserLoged(){
    return Number(window.sessionStorage.getItem('userId'));
  }
  getToken(){
    return String(window.sessionStorage.getItem('token'));
  }
  isLoged(){
    if(window.sessionStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }
  logOut(){
    window.sessionStorage.clear();
    this.userId=0
    this.token=""
  }
}
