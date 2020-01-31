import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';


export interface IUser{
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentClient: BehaviorSubject<IUser>= new BehaviorSubject<IUser>(null);

public  constructor(private router: Router, private httpClient: HttpClient) {
 }

 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};



public userIdentification(user: IUser): Observable<boolean> {
  let userToTest= {username: user.login, password: user.password};
 // console.log(userToTest);

  return this.httpClient.post<any>(environment.apiUrl+'/public/authenticate/', userToTest).pipe(map(
    resp =>{
      const token= resp.token;
      console.log(token);
      
      if(token && token!=null){
      localStorage.setItem('token', token);
      console.log(localStorage.getItem('token'));

      this.currentClient.next(user);
      return true;
    }else{return false};
  }));
   
}


public deleteUser(): void{
  localStorage.removeItem('token');
  this.router.navigate(['login']);
  console.log('delete current user');
  this.currentClient.next(null);
}

public isAuthenticated(): boolean{
return (this.currentClient.value!=null);
}

}
