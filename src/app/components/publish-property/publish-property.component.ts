import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PublishService} from "../../shared/services/publish.service";
import {Property} from "../../model/property";

@Component({
  selector: 'app-publish-property',
  templateUrl: './publish-property.component.html',
  styleUrls: ['./publish-property.component.css']
})
export class PublishPropertyComponent implements OnInit{
  postForm: FormGroup;
  proList: Property[]=[];
  constructor(private formBuilder: FormBuilder, private publishService: PublishService) {
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
