import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../public/shared/services/user.service";

@Component({
  selector: 'app-see-messages',
  templateUrl: './see-messages.component.html',
  styleUrls: ['./see-messages.component.css']
})
export class SeeMessagesComponent implements OnInit, AfterViewInit{

  nameChat:string = "Here your chats"
  chatsUsers:User[]=[]
  constructor(private _userService:UserService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    this.getAllUserChats()
  }
  ngAfterViewInit(): void {

  }

  getAllUserChats(){
    this._userService.getAll().subscribe((data:any)=>{
      this.chatsUsers=data
    })
  }

  changeNameChat(name:string){
    this.nameChat= name
    this.scroll()
  }

  scroll(){
    const messageContainer = this.el.nativeElement.querySelector('.messages');
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}
