import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {Property} from "../../models/Property";
import {PostService} from "../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {PropertyService} from "../services/property.service";
import {UserService} from "../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-see-post',
  templateUrl: './see-post.component.html',
  styleUrls: ['./see-post.component.css']
})
export class SeePostComponent implements OnInit{
  post !:Post
  property !: Property
  user !:User

  constructor(private _postService: PostService,
              private _propertyService: PropertyService,
              private _userService:UserService,
              private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(){
    this.route.paramMap.subscribe(params => {
      const postId = Number(params.get('id'));
      this._postService.getPostById(postId).subscribe((data)=>{
        this.post = data

        this.getProperty()
      });
    });
  }
  getProperty(){
      this._propertyService.getPropertyById(this.post.propertyId).subscribe((data)=>{
        this.property = data
        this.getUser()

    });
  }

  getUser(){
    this._userService.getUserById(this.property.authorId).subscribe((data)=>{
      this.user= data
    })
  }
}
