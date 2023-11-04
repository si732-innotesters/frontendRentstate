import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../../../../public/shared/services/property.service";
import {Property} from "../../../../models/Property";

@Component({
  selector: 'app-your-properties',
  templateUrl: './your-properties.component.html',
  styleUrls: ['./your-properties.component.css']
})
export class YourPropertiesComponent implements OnInit{

  properties:Property[]=[]

  constructor(private _propertyService:PropertyService) {

  }

  ngOnInit(): void {
    this._propertyService.getAll().subscribe((data:any)=>{
      this.properties = data;
      console.log(this.properties)
    })
  }

}
