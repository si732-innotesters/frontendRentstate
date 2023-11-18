import {Component, Input, OnInit, Output} from '@angular/core';
import {MessageService} from "../../../public/shared/services/messageservice/message.service";
import {Message} from "../../../models/Message";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit{


  userLogedId = 1

  //chats:Message[]=[]

  @Input()chatsInput!: Message[]


  constructor(private _messageService:MessageService) {
  }

  ngOnInit(): void {

  }


}
