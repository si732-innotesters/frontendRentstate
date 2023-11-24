import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "../../../../models/Property";
import {Post} from "../../../../models/Post";
import {BaseService} from "../base/base.service";
import {CommentPost} from "../../../../models/CommentPost";
import {UserService} from "../userservice/user.service";

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService<Post>{

  userLoguedId!:number
  constructor(private _http:HttpClient,
              private _userService:UserService) {
    super(_http)
    this.resourceEndPoint='/api/v1/posts'
    this.userLoguedId = this._userService.getIdUserLoged();
  }

  getPostsByAuthorId(id:number){
    return this._http.get(`${this.resourcePath()}/author-id/${id}`)
  }

  getAllCommentsByPostId(id:number){
    return  this._http.get(`${this.resourcePath()}/comment/post-id/${id}`)
  }

  addComment(comment:CommentPost){
    return this._http.post(`${this.resourcePath()}/add-comment`, comment)
  }

}
