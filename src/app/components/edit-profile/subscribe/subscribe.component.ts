import {Component, Host} from '@angular/core';
import {User} from "../../../models/User";
import {EditProfileComponent} from "../edit-profile.component";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  user!:User

  makePremium!:boolean
  cancelPremium!: boolean
  constructor( @Host() private _editComponent:EditProfileComponent) {
    this.user = this._editComponent.user
    if(this.user.isPremium){
      this.cancelPremium = true
      this.makePremium = false
    }else{
      this.cancelPremium = false
      this.makePremium = true
    }
  }

  updateUser(){

    this.user.isPremium = !this.user.isPremium

    this._editComponent._userService.update(this.user).subscribe(() => {
      this._editComponent.updatePremium = false
    })
  }

  cancel(){
    this._editComponent.updatePremium=false
  }
}
