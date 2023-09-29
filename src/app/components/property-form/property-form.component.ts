import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent {
  propertyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.propertyForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      url: ['', Validators.required],
      characteristics: ['', Validators.required],
      location: ['', Validators.required],
      available: ['', Validators.required],
    });
  }

  addProperty(){

  }




}
