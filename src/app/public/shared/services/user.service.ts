import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/User";
import {BaseService} from "./base/base.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(private _http:HttpClient) {
    super(_http)
    this.resourceEndPoint ='/Users'
  }


}
