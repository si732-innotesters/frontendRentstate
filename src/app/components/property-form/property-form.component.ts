import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Property} from "../../models/Property";
import {UserService} from "../../public/shared/services/userservice/user.service";
import {PropertyService} from "../../public/shared/services/property.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit{
  propertyForm: FormGroup;
  property!:Property

  constructor(private formBuilder: FormBuilder,
              private _propertyService:PropertyService,
              private _router:Router) {

    this.propertyForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      urlImg: ['', Validators.required],
      characteristics: ['', Validators.required],
      location: ['', Validators.required],
      available: ['', Validators.required],
    });

    this.property = {
      authorId: 1,
      name: '',
      urlImg: '',
      description: '',
      characteristics: '',
      location: '',
      category: '',
      available: false,
      renterId:4,
    };

  }

  addProperty() {
    if (this.propertyForm.valid) {

      this.property = {
        ...this.property,
        ...this.propertyForm.value,
      };

      console.log(this.property);
      this._propertyService.create(this.property).subscribe(()=>{
        console.log("Property Added")
        this._router.navigate(['/add-post'])
      })

    } else {
      alert("Invalid");
    }
  }


  ngOnInit(): void {


  }
}
