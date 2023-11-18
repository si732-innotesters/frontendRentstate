import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../base/base.service";
import {Message} from "../../../../models/Message";

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService<Message>{

  constructor(private _http:HttpClient) {
    super(_http)
    this.resourceEndPoint = this.resourceEndPoint + '/messages';
  }

  getChatsName(recipientId:number){
    return this._http.get(`${this.resourcePath()}/chats/${recipientId}`)
  }
  getChatsByRecipientIdAndAuthorId(recipientId:number, authorId:number){
    return this._http.get(`${this.resourcePath()}/${recipientId}/${authorId}`)
  }


}
