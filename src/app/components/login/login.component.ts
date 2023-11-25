import {Component, Host, OnInit} from '@angular/core';
import {UserService} from "../../public/shared/services/userservice/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  constructor(private _userService:UserService,
              private _formBuilder: FormBuilder,
              private _router:Router,
              ){
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    });

  }
  ngOnInit(): void {

  }

  login(){

    if(this.loginForm.valid){
      this._userService.login(this.loginForm.value).subscribe((data:any)=>{

        this._userService.automaticLogin(data)
        this._router.navigate(['/welcome'])
      })
    }else {
      alert("Complete the form correctly")
    }
  }

}
