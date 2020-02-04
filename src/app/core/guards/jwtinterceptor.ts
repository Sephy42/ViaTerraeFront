import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {}

    intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
	        tap(event => {
                if (event instanceof HttpResponse) {	             
                    // http response status code
                    console.log(event.status);
                    if (event.status === 401) {
                        this.userService.deleteUser();
                    }
                  }
            }, error => {
                // http response exceptions
               console.log("----response----");
               console.error("status code:");
               console.error(error.status);
               console.error(error.message);
               console.log("--- end of response---");

         }));
        }
        
}
