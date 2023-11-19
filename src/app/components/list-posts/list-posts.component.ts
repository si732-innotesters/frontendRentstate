import {Component, OnInit} from '@angular/core';
import {PostService} from "../../public/shared/services/postservice/post.service";
import {Post} from "../../models/Post";
import {PropertyService} from "../../public/shared/services/propertyservice/property.service";
import {Property} from "../../models/Property";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements  OnInit{

  posts: Post[] = []
  postsCopy: Post[] = [];
  category:string=''


  constructor(private _postService:PostService,
              private _propertyService:PropertyService) {

  }
  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this._postService.getAll().subscribe({
      next: (val: any) => {
        this.posts = val;
        this.postsCopy = this.posts
      }
    });
  }

  selectCategory(newCategory: string) {
    this.posts = this.postsCopy
    if (this.category === newCategory) {
      this.category = ''
      return
    } else {
      this.category = newCategory;
    }

    this.posts = this.posts.filter(post => {
      return post.property.category === this.category
    });
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
