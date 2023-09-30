import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../../models/Post";
import {PropertyService} from "../services/property.service";
import {Property} from "../../models/Property";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements  OnInit{

  posts: Post[] = []
  properties:Property[]=[]

  constructor(private _postService:PostService,
              private _propertyService:PropertyService) {

  }

  ngOnInit(): void {
    this.getAllPosts()
    this.getAllProperties()
  }

  getAllPosts() {
    this._postService.getAllPost().subscribe({
      next: (val: any) => {
        this.posts = val;
      }
    });
  }

  getAllProperties(){
    this._propertyService.getAllProperties().subscribe({
      next:(val:any)=>{
        this.properties = val
      }
    })
  }

  getPropertyById(propertyId: number): Property | undefined {
    return this.properties.find(property => property.id === propertyId);
  }
}
