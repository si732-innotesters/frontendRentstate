import {Component, OnInit} from '@angular/core';
import {UserService} from "../../public/shared/services/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";
import {ForumAnswer} from "../../models/ForumAnswer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

  notPhotoProfile:string = "./assets/images/imgUserBlack.png"

  genderOptions = ['','Male', 'Female', 'Other']

  userId!:number
  user!:User
  formUser:FormGroup

  showAlert = false
  updatePremium = false
  cancelPremium = false

  constructor(public _userService:UserService,
              private _route:ActivatedRoute,
              private _formBuild:FormBuilder) {

    this._route.params.subscribe(params => {
      this.userId = +params['id'];

    })

    this.formUser=this._formBuild.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', [Validators.required, Validators.pattern(/^(Male|Female|Other)$/)]],
      description: ['', Validators.required],
      age: ['', Validators.required],
      photoUrl:['',Validators.required],
    })
  }
  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this._userService.getById(this.userId).subscribe((data)=>{
      this.user = data

      if(this.user.photoUrl == ''){
        this.user.photoUrl = this.notPhotoProfile
      }

      this.formUser.patchValue(this.user)
    })
  }

  updateUser(){
    if(this.formUser.valid){

      this._userService.update(this.userId,this.formUser.value).subscribe(()=>{
        console.log("Updated")
      })
    }else{
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false
      }, 2000);
    }
  }

  updatePremiumUser(){
    this.updatePremium=true
  }



}
