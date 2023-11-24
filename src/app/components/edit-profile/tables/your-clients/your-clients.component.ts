import {Component, OnInit} from '@angular/core';
import {Client} from "../../../../models/Client";
import {PropertyService} from "../../../../public/shared/services/propertyservice/property.service";

@Component({
  selector: 'app-your-clients',
  templateUrl: './your-clients.component.html',
  styleUrls: ['./your-clients.component.css']
})
export class YourClientsComponent implements OnInit{

  clients:Client[]=[]

  constructor(private _propertyService:PropertyService) {

  }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(){
    this._propertyService.getAllClient().subscribe((data:any)=>{
      this.clients=data;
    })
  }

  changeActive(rentedPropertyId: number) {
    this._propertyService.removeRenter(rentedPropertyId).subscribe((data)=>{
      this.getAllClients()
    })
  }
}
