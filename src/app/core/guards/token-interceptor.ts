import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {


    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        if (localStorage.getItem('token') && request.url.startsWith(environment.apiUrl+'/private')) {
            console.log('Bearer ' + localStorage.getItem('token'));
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
        }
        return next.handle(request);
    }
}