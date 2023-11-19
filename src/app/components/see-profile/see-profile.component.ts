import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../public/shared/services/userservice/user.service";
import {ActivatedRoute} from "@angular/router";
import {Message} from "../../models/Message";
import {MessageService} from "../../public/shared/services/messageservice/message.service";
import {RateBody} from "../../models/Rate";
import {CommentPost} from "../../models/CommentPost";


@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.css']
})
export class SeeProfileComponent implements OnInit{

  stars: number[] = [1, 2, 3, 4, 5]
  selectedStars: number = 5

  sendMessage:boolean = false
  writingMessage:string=""

  user!:User

  constructor(private _userService: UserService,
              private _route:ActivatedRoute,
              private _messageService:MessageService) {

  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){

    this._route.paramMap.subscribe(param =>{
      const userId = Number(param.get('id'));

      this._userService.getById(userId).subscribe((data)=>{
        this.user = data
      })
    })

  }

  changeSendMessage(){
    this.sendMessage = !this.sendMessage
  }

  onMessageInput(event: any): void {
    this.writingMessage = event.target.value;
  }
  addMessage(): void {
    if(this.writingMessage != "") {
      var newMessage: Message = {
        authorId: this._userService.getIdUserLoged(),
        recipientId: this.user.id,
        content: this.writingMessage.toString(),
      }

      this._messageService.create(newMessage).subscribe((data: any) => {
        this.writingMessage = ""
        alert("Message sent")
        this.sendMessage = false
      })
    }
  }

  selectStars(stars: number) {
    this.selectedStars = stars;
  }

  saveStars() {

    var rate: RateBody = {
      ratedUserId: this.user.id,
      ratedByUserId: this._userService.getIdUserLoged(),
      rating: this.selectedStars
    }
    console.log(rate)
    this._userService.addRating(rate).subscribe(()=>{
        window.location.reload()
      },
      (error) => {
        console.error('Error updating rating', error);
      }
    );
  }

}
