import {Component, Input, OnInit, Output} from '@angular/core';
import {MessageService} from "../../../public/shared/services/messageservice/message.service";
import {Message} from "../../../models/Message";
import {UserService} from "../../../public/shared/services/userservice/user.service";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit{


  userLogedId!:number

  @Input()chatsInput!: Message[]


  constructor(private _userService:UserService) {
  }

  ngOnInit(): void {
    this.userLogedId= this._userService.getIdUserLoged();
  }


}
