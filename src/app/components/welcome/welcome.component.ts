import {Component, OnInit} from '@angular/core';
import {UserService} from "../../public/shared/services/userservice/user.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  idUser!:number
  nameUser : string="";
  constructor(private _userService:UserService) {
  }

  ngOnInit(): void {
    this._userService.getById(1)
      .subscribe((data)=>{
        this.nameUser = data.name +' '+ data.lastName
        this.idUser = data.id
        console.log("=====================")
    })
  }
}
