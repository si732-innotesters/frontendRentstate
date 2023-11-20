import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "../../../../models/Property";
import {Post} from "../../../../models/Post";
import {BaseService} from "../base/base.service";
import {CommentPost} from "../../../../models/CommentPost";

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService<Post>{

  constructor(private _http:HttpClient) {
    super(_http)
    this.resourceEndPoint='/api/v1/posts'
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
