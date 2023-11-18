import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../base/base.service";
import {ForumQuestion} from "../../../../models/ForumQuestion";

@Injectable({
  providedIn: 'root'
})
export class ForumQuestionService extends BaseService<ForumQuestion>{

  constructor(http:HttpClient) {
    super(http)
    this.resourceEndPoint= '/api/v1/forum-questions'
  }


}
