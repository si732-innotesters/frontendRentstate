import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "../userservice/user.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private _userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string = this._userService.token;

    if (req.url.includes('login') || req.url.includes('register')) {
      return next.handle(req);
    }

    if (0) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}`,
        },
      });
    }

    return next.handle(req);
  }
}
