import { Injectable } from '@angular/core';
import {BaseService} from "../base/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForumAnswerService extends BaseService<ForumAnswerService>{

  constructor(private _http:HttpClient) {
    super(_http)
    this.resourceEndPoint='/api/v1/forum-answers'
  }

  public getAllAnswersByQuestionId(questionId:number){
    return this._http.get(`${this.resourcePath()}/${questionId}`)
  }
}
