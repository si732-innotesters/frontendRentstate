import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../../../../public/shared/services/propertyservice/property.service";
import {Property} from "../../../../models/Property";
import {UserService} from "../../../../public/shared/services/userservice/user.service";

@Component({
  selector: 'app-your-properties',
  templateUrl: './your-properties.component.html',
  styleUrls: ['./your-properties.component.css']
})
export class YourPropertiesComponent implements OnInit{

  properties:Property[]=[]

  constructor(private _propertyService:PropertyService,
              private _userService:UserService) {

  }

  ngOnInit(): void {
    this._propertyService.getAllByAuthorId(this._userService.getIdUserLoged()).subscribe((data:any)=>{
      this.properties = data;
    })
  }

}
