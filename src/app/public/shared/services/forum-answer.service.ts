import { Injectable } from '@angular/core';
import {BaseService} from "./base/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForumAnswerService extends BaseService<ForumAnswerService>{

  constructor(http:HttpClient) {
    super(http)
    this.resourceEndPoint='/ForumAnswer'
  }
}
