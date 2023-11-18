import {Component, OnInit} from '@angular/core';
import {PostService} from "../../public/shared/services/post.service";
import {Post} from "../../models/Post";
import {PropertyService} from "../../public/shared/services/propertyservice/property.service";
import {Property} from "../../models/Property";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements  OnInit{

  properties:Property[]=[]
  posts: Post[] = []
  postsCopy: Post[] = [];
  category:string=''


  constructor(private _postService:PostService,
              private _propertyService:PropertyService) {

  }

  ngOnInit(): void {
    this.getAllPosts()
    this.getAllProperties()
  }

  getAllPosts() {
    this._postService.getAll().subscribe({
      next: (val: any) => {
        this.posts = val;
        this.postsCopy = this.posts
      }
    });
  }

  getAllProperties(){
    this._propertyService.getAll().subscribe({
      next:(val:any)=>{
        this.properties = val
      }
    })
  }

  getPropertyById(propertyId: number): Property | undefined {
    return this.properties.find(property => property.id === propertyId);
  }


  selectCategory(newCategory: string) {
    this.posts = this.postsCopy
    if (this.category === newCategory) {
      this.category = '';
    } else {
      this.category = newCategory;
    }

    if (this.category != '') {
      this.posts = this.postsCopy.filter(post => {
        const property = this.properties.find(property => property.id === post.propertyId);
        return property && property.category === this.category;
      });
    }
  }
  applyFilter(event: Event) {
    this.posts = this.postsCopy
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.trim().toLowerCase();

    if (filterValue != '') {
      this.posts = this.posts.filter(post => {
        return post.title.toLowerCase().includes(filterValue);
      });
    }
  }


}
