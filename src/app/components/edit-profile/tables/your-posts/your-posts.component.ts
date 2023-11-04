import {Component, OnInit} from '@angular/core';
import {Post} from "../../../../models/Post";
import {PostService} from "../../../../public/shared/services/post.service";

@Component({
  selector: 'app-your-posts',
  templateUrl: './your-posts.component.html',
  styleUrls: ['./your-posts.component.css']
})
export class YourPostsComponent implements OnInit{
  posts: Post[]=[]

  constructor(private _postService: PostService) {

  }
  ngOnInit() {
    this._postService.getAll().subscribe((data: any)=>{
      this.posts = data;
      console.log(this.posts)
    })
  }

}
