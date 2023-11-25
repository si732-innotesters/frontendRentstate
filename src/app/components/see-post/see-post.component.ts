import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../public/shared/services/postservice/post.service";
import {ActivatedRoute} from "@angular/router";
import {CommentPost} from "../../models/CommentPost";
import {Message} from "../../models/Message";
import {UserService} from "../../public/shared/services/userservice/user.service";
import {PropertyService} from "../../public/shared/services/propertyservice/property.service";

@Component({
  selector: 'app-see-post',
  templateUrl: './see-post.component.html',
  styleUrls: ['./see-post.component.css']
})
export class SeePostComponent implements OnInit{

  post !:Post
  comments:CommentPost[]=[]
  writtenComment:string=""
  reservedByUserLoged:boolean=false

  constructor(private _postService: PostService,
              private route:ActivatedRoute,
              private _userService:UserService,
              private _propertyService:PropertyService) {
  }

  ngOnInit(): void {
    this.getPost()
  }

  getPost() {
    this.route.paramMap.subscribe(params => {
      const postId = Number(params.get('id'));

      this._postService.getById(postId).subscribe((data) => {
        this.post = data;

        const userLogedId = this._userService.getIdUserLoged();

        this.reservedByUserLoged = this.post.property.reservedUsers.some(user => user.id === userLogedId);

      });

      this.getAllCommentsByPostId(postId);
    });
  }


  getAllCommentsByPostId(id:number){
    this._postService.getAllCommentsByPostId(id).subscribe((data:any)=>{
      this.comments=data
    })
  }

  changeReservation(propertyId:number){
    if(this.post.id != this._userService.userId) {
      if (this.reservedByUserLoged) {
        this._propertyService.removeReservation(propertyId, this._userService.userId).subscribe(() => {
          alert("Your reservation was canceled")
          this.reservedByUserLoged = false
        })
      } else {
        this._propertyService.addReservation(propertyId, this._userService.userId).subscribe(() => {
          alert("You reserved this property")
          this.reservedByUserLoged = true
        })
      }
    }
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
