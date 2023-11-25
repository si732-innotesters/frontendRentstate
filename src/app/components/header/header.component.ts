import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from "../../public/shared/services/userservice/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{



  constructor(private _userService:UserService,
              private _router:Router,
              ) {

  }

  ngOnInit(): void {

  }

  isUserLoged(){
    return this._userService.isLoged();
  }
  goMyProfile(){
    this._router.navigate([`/my-profile`])
  }
}
