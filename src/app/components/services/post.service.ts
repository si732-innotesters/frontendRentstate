import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "../../models/Property";
import {Post} from "../../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string="https://logicminds-server.onrender.com/Posts";
  constructor(private _http:HttpClient) {}

  getAllPost(){
    return this._http.get<Post>(this.baseUrl);
  }
  getPostById(id:number){
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<Post>(url);
  }

  addPost(data:Post){
    return this._http.post(this.baseUrl,data);
  }

  updatePost(id:number, post:Post){
    const url = `${this.baseUrl}/${id}`;
    return this._http.put(url,post);
  }
  deletePostById(id:number){
    const url = `${this.baseUrl}/${id}`;
    return this._http.delete<Post>(url)
  }
}
