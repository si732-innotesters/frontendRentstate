import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../public/shared/services/postservice/post.service";
import {ActivatedRoute} from "@angular/router";
import {CommentPost} from "../../models/CommentPost";
import {Message} from "../../models/Message";
import {UserService} from "../../public/shared/services/userservice/user.service";

@Component({
  selector: 'app-see-post',
  templateUrl: './see-post.component.html',
  styleUrls: ['./see-post.component.css']
})
export class SeePostComponent implements OnInit{

  post !:Post
  comments:CommentPost[]=[]
  writtenComment:string=""

  constructor(private _postService: PostService,
              private route:ActivatedRoute,
              private _userService:UserService) {
  }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(){
    this.route.paramMap.subscribe(params => {
      const postId = Number(params.get('id'));

      this._postService.getById(postId).subscribe((data)=>{
        this.post = data

      });

      this.getAllCommentsByPostId(postId)

    });
  }

  getAllCommentsByPostId(id:number){
    this._postService.getAllCommentsByPostId(id).subscribe((data:any)=>{
      this.comments=data
    })
  }


  onCommentInput(event: any): void {
    this.writtenComment = event.target.value;
  }
  addComment(): void {
    if(this.writtenComment != "") {
      var newComment: CommentPost = {
        authorId: this._userService.getIdUserLoged(),
        postId: this.post.id,
        content: this.writtenComment.toString(),
      }

      this._postService.addComment(newComment).subscribe((data: any) => {
        this.writtenComment = ""
        this.comments.push(data)
      })
    }
  }

}
