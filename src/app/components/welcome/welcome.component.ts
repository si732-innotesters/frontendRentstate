import {Component, OnInit} from '@angular/core';
import {UserService} from "../../public/shared/services/userservice/user.service";
import {User} from "../../models/User";

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
    this._userService.getById(this._userService.getIdUserLoged())
      .subscribe((data)=>{
        this.nameUser = data.name +' '+ data.lastName
        this.idUser = data.id
    })
  }
}
