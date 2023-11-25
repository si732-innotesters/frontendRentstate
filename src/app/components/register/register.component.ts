import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../public/shared/services/userservice/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formRegister:FormGroup
  constructor(private _router:Router,
              private _formBuilder:FormBuilder,
              private _userService:UserService) {

    this.formRegister = this._formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    });
  }

  addUser(){

    if(this.formRegister.valid){
      this._userService.register(this.formRegister.value).subscribe((data:any)=>{
        this._userService.automaticLogin(data)
        this._router.navigate(["/welcome"])

      })
    }
  }
}
