import { Injectable } from '@angular/core';
import {environment} from "../../../../envieonments/environment.developments";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService <T>{

  basePath:string = `${environment.serverBasePath}`
  resourceEndPoint: string= `/resources`

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private _httpClient: HttpClient) {
  }

  private resourcePath():string{
    console.log("resourcePath "+ `${this.basePath}${this.resourceEndPoint}`)
    return `${this.basePath}${this.resourceEndPoint}`
  }

  getAll() {
    return this._httpClient.get<T>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
  getById(id: any) {
    return this._httpClient.get<T>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  create(item:any){
    return this._httpClient.post(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
  delete(id:any){
    return this._httpClient.delete<T>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
  update(id:any, item:any){
    return this._httpClient.put(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse){
    //Default error handling
    if(error.error instanceof ErrorEvent){
      console.error(`An error ocurred: ${error.error.message}`)
    }else{
      //Unsuccessful Response Error Code returned
      console.log(`Backend returned core ${error.status}, body was ${error.error}`)
    }

    return throwError(()=> new Error(`Something happened with request, please try again later.`))
  }

}
