import {Component, OnInit} from '@angular/core';
import {UserService} from "../../public/shared/services/userservice/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/User";
import {ForumAnswer} from "../../models/ForumAnswer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {style} from "@angular/animations";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

  notPhotoProfile:string = "./assets/images/imgUserBlack.png"

  genderOptions = ['Reserved','Male', 'Female', 'Other']

  userId:number
  user!:User
  formUser:FormGroup

  showAlert = false
  updatePremium = false

  constructor(public _userService:UserService,
              private _router:Router,
              private _formBuild:FormBuilder) {

    this.userId = this._userService.userId

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

      if(this.user.photoUrl == '' || this.user.photoUrl==null){
        this.user.photoUrl = this.notPhotoProfile
      }
      this.formUser.patchValue(this.user)
    })
  }

  updateUser(){
    if(this.formUser.valid){
      this.user.id = this.userId;
      this.user.name = this.formUser.get('name')?.value;
      this.user.lastName = this.formUser.get('lastName')?.value;
      this.user.gender = this.formUser.get('gender')?.value;
      this.user.description = this.formUser.get('description')?.value;
      this.user.age = this.formUser.get('age')?.value;
      this.user.photoUrl = this.formUser.get('photoUrl')?.value;

      console.log(this.user)
      this._userService.update(this.user).subscribe(()=>{
        this._router.navigate(['/list-posts'])
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

  logOut(){
    this._userService.logOut()

    this._router.navigate(['/login'])
  }

  protected readonly style = style;
}
