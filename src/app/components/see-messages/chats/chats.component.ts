import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../../shared/services/message.service";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit{


  userLogedId = 1

  chats:any=[]
  constructor(private _messageService:MessageService) {
  }

  ngOnInit(): void {
    this._messageService.getChats("EmilyBrown").subscribe((data)=>{
      this.chats = data
      console.log(this.chats)
    })
  }
}
