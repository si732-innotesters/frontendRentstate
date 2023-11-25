import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from "../../public/shared/services/userservice/user.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterViewInit{

  userId:number
  nameUser : string="";
  constructor(private _userService:UserService) {
    this.userId = this._userService.userId
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this._userService.getById(this.userId)
      .subscribe((data)=>{
        this.nameUser = data.name +' '+ data.lastName
      })
  }
}
