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
    edit:boolean=false
    showForm:boolean = false
    propertyToEdit!:Property

  constructor(private _propertyService:PropertyService,
              private _userService:UserService) {

  }

  ngOnInit(): void {
    this.getMyProperties()
  }

  onEditMode(property:Property){
      this.propertyToEdit = property
      this.edit=true;
      this.showForm=true;
  }

  getMyProperties(){
    this._propertyService.getAllByAuthorId(this._userService.getIdUserLoged()).subscribe((data:any)=>{
      this.properties = data;
    })
  }
  deletePropertyById(id:number){
    this._propertyService.delete(id).subscribe(()=>{
      this.getMyProperties()
    })
  }

    editProperty(property: Property) {
        console.log(property);
        this._propertyService.update(property).subscribe(() => {
            this.showForm = false;
            this.edit = false;

            const index = this.properties.findIndex(p => p.id === property.id);
            if (index !== -1) {
                this.properties[index] = { ...this.properties[index], ...property };
            }
        });
    }

    showFormProperty(){
        this.showForm=true
    }
    cancelEdit($event: boolean) {
        this.showForm=false
        this.edit=false
    }

    editAvailability(property: Property) {
        this.showForm=true
        this.showForm=true
    }
}
