import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../public/shared/services/userservice/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.css']
})
export class SeeProfileComponent implements OnInit{

  sendMessage:boolean= false

  user!:User

  constructor(private _userService: UserService,
              private _route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    let id = null
    this._route.paramMap.subscribe(param =>{
      id = Number(param.get('id'))
    })
    if(id != null){
      this._userService.getById(id).subscribe((data)=>{
        this.user = data
      })
    }

  }

  changeSendMessage(){
    this.sendMessage = !this.sendMessage
  }



}
