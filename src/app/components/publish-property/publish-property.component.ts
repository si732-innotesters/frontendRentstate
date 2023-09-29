import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-publish-property',
  templateUrl: './publish-property.component.html',
  styleUrls: ['./publish-property.component.css']
})
export class PublishPropertyComponent implements OnInit{
  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      property: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
 ngOnInit() {
    this.LoadProperties();
 }

  LoadProperties(){
    //getAllProperties
  }

  Post(){

  }

}
