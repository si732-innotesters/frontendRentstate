import {AfterViewInit, Component, ElementRef, Host, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../public/shared/services/userservice/user.service";
import {MessageService} from "../../public/shared/services/messageservice/message.service";
import {ChatsComponent} from "./chats/chats.component";
import {Message} from "../../models/Message";

@Component({
  selector: 'app-see-messages',
  templateUrl: './see-messages.component.html',
  styleUrls: ['./see-messages.component.css']
})
export class SeeMessagesComponent implements OnInit{

  userLogedId!:number
  recipientId!:number
  nameChat:string = "Here your chats"
  chatsUsers:User[]=[]
  chatsMessage:Message[]=[]
  writtenMessage:String=""
  constructor(private _userService:UserService,
              private _messageService:MessageService,
              private el: ElementRef,
              ) {
  }

  ngOnInit(): void {
    this.userLogedId = this._userService.getIdUserLoged()

    this.getAllUserChats()
  }

  onMessageInput(event: any): void {
    this.writtenMessage = event.target.value;
  }
  sendMessage(): void {
    var newMessage: Message = {
      recipientId: this.recipientId,
      authorId: this.userLogedId,
      content: this.writtenMessage.toString(),
        createdAt : new Date()
    }

    this._messageService.create(newMessage).subscribe(()=>{
        console.log("message send")
        this.chatsMessage.push(newMessage)
        this.writtenMessage=""
    })
  }

  getAllUserChats(){
    this._messageService.getChatsName(this._userService.getIdUserLoged()).subscribe((data:any)=>{
      this.chatsUsers=data
    })
  }

  getChats(recipientId:number, authorId:number) {
    this._messageService.getChatsByRecipientIdAndAuthorId(recipientId, authorId).subscribe((data: any) => {
      this.chatsMessage = data;
    })
  }

  changeNameChat(user:User){
    this.nameChat= user.name + ' '+ user.lastName
    this.recipientId = user.id
    this.getChats(this.userLogedId,user.id);
    this.scroll()
  }

  scroll(){
    const messageContainer = this.el.nativeElement.querySelector('.messages');
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}
