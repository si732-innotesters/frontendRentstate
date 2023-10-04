import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PropertyService} from "../../public/shared/services/property.service";
import {Property} from "../../models/Property";
import {Route, Router, Routes} from "@angular/router";
import {PostService} from "../../public/shared/services/post.service";

@Component({
  selector: 'app-publish-property',
  templateUrl: './publish-property.component.html',
  styleUrls: ['./publish-property.component.css']
})
export class PublishPropertyComponent implements OnInit{

  properties:Property[]=[]

  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private _propertyService:PropertyService,
              private _postsService:PostService,
              private _router:Router)
  {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      propertyId: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
 ngOnInit() {
    this.getAllProperties()
 }

 getAllProperties(){
    this._propertyService.getAll().subscribe({
      next:(val:any)=>{
        this.properties=val

        if(this.properties.length == 0){
            this._router.navigate(['/register-property'])
        }
      }
    })
 }

 addPost(){
    if(this.postForm.valid){
      this._postsService.create(this.postForm.value).subscribe(()=>{
        console.log("Post Added")
      })
    }else{
      alert("Invalid")
    }
 }

}
