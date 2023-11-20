import {Component, OnInit} from '@angular/core';
import {Post} from "../../../../models/Post";
import {PostService} from "../../../../public/shared/services/postservice/post.service";
import {UserService} from "../../../../public/shared/services/userservice/user.service";

@Component({
  selector: 'app-your-posts',
  templateUrl: './your-posts.component.html',
  styleUrls: ['./your-posts.component.css']
})
export class YourPostsComponent implements OnInit{
  posts: Post[]=[]
  postAux!:Post
  constructor(private _postService: PostService,
              private _userService:UserService) {

  }
  ngOnInit() {
    this.getMyPosts()
  }

  getMyPosts(){
    this._postService.getPostsByAuthorId(this._userService.getIdUserLoged()).subscribe((data: any)=>{
      this.posts = data;
      console.log(this.posts)
    })
  }

  activeEditMode(post:Post){
    this.postAux = post
    post.editMode=true
  }
  cancelEdit(post:Post){
    post.editMode=false
  }
  updatePost(post:Post){
    post.editMode=false
    console.log(post.price)
    this._postService.update(post).subscribe(()=>{
      console.log("Post Update")
      this.getMyPosts()
    })
  }
  deletePost(id:number){
    this._postService.delete(id).subscribe(()=>{
      this.getMyPosts()
    })
  }
}
