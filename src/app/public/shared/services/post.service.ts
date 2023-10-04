import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "../../../models/Property";
import {Post} from "../../../models/Post";
import {BaseService} from "./base/base.service";

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService<Post>{

  constructor(private _http:HttpClient) {
    super(_http)
    this.resourceEndPoint='/Posts'
  }

}
