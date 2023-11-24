import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PropertyService} from "../../public/shared/services/propertyservice/property.service";
import {Property} from "../../models/Property";
import {Router} from "@angular/router";
import {PostService} from "../../public/shared/services/postservice/post.service";
import {UserService} from "../../public/shared/services/userservice/user.service";

@Component({
  selector: 'app-publish-property',
  templateUrl: './publish-property.component.html',
  styleUrls: ['./publish-property.component.css']
})
export class PublishPropertyComponent implements OnInit{

  properties:Property[]=[]

  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private _userService:UserService,
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

  getAllProperties() {
    this._propertyService.getAllByAuthorId(this._userService.getIdUserLoged()).subscribe({
      next: (val: any) => {
        this.properties = val;
        this.properties = this.properties.filter(property => !property.isPosted && property.available);

      },
    });
  }

 addPost(){
    if(this.postForm.valid){
      this._postsService.create(this.postForm.value).subscribe(()=>{
        alert("Post Added")
        this._router.navigate(['/list-posts'])
      })
    }else{
      alert("Invalid")
    }
 }

}
