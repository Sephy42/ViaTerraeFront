import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(private router:Router) {}

    intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
  
          return next.handle(request);
        }

        
}
