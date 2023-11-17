import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../../models/User";
import {BaseService} from "../base/base.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(private _http:HttpClient) {
    super(_http)
    this.resourceEndPoint = this.resourceEndPoint + '/users';
  }
  public login(credentials:any){
    this.resourceEndPoint ='/api/v1/users/login'
    return this._http.post(this.resourcePath(),credentials);
  }

  addUserIdLocalStore(id:Number){
    window.sessionStorage.setItem('userLogedId', id.toString());
  }
  automaticLogin(user:any){
    this.addUserIdLocalStore(user.id)
  }
  getIdUserLoged(){
    return Number(window.sessionStorage.getItem('userLogedId'));
  }
  isLoged(){
    if(window.sessionStorage.getItem('userLogedId')){
      return true;
    }else{
      return false;
    }
  }

  logOut(){
    window.sessionStorage.clear();
  }
}
