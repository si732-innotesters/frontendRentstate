import { Component } from '@angular/core';

@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.css']
})
export class SeeProfileComponent {

  sendMessage:boolean= false



  changeSendMessage(){
    this.sendMessage = !this.sendMessage
  }

}
