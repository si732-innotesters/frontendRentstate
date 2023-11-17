import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from "../../public/shared/services/userservice/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  idUser!:number

  constructor(private _userService:UserService,
              ) {

  }

  ngOnInit(): void {
    this.idUser = this._userService.getIdUserLoged()
  }


}
