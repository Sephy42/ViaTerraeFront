import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError, of } from 'rxjs';
import { take, map } from 'rxjs/operators';


export interface IUser{
  login: string;
  password: string;
  isActiv?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: IUser;


  private readonly users: IUser[]=[
    {login:'totos',password:'totos', isActiv: false},
    {login:'titis',password:'titis',isActiv: false},
  ];

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


 public storeCurrentUser(user: IUser): void{
  let key= 'currentUser';
  localStorage.setItem(key, JSON.stringify(user));
}


public userIdentification(user: IUser): Observable<boolean> {
  let userToTest= {username: user.login, password: user.password};
  console.log(userToTest);

  return this.httpClient.post<any>(environment.apiUrl+'/public/authenticate/', userToTest).pipe(map(
    resp =>{
      const token= resp.token;
          
      if(token && token!=null){
      localStorage.setItem('token', JSON.stringify(token));
      console.log(JSON.parse(localStorage.getItem('token')));
      return true;
    }else{return false};
  }));
  // return new Promise<boolean>((resolve)=>{
  //   this.httpClient.post<IUser>(`${environment.apiUrl}/public/authenticate/`, userToTest, {observe:'response'}).pipe(take(1)
  //  ).subscribe(
  //   (resp: HttpResponse<any> )=>{
  //     const token= resp.body.token;
          
  //     if(token && token!=null){
  //     localStorage.setItem('token', JSON.stringify(token));
  //     console.log(JSON.parse(localStorage.getItem('token')));
  //     resolve(true);
  //   }else{resolve(false)};
  // });
 //})
   
}


public deleteUser(): void{
  let key= 'currentUser';
  localStorage.removeItem(key);
  localStorage.removeItem('token');
  this.router.navigate(['login']);
  console.log('delete current user');
}

public isAuthenticated(): boolean{
let key= 'token';
let item = JSON.parse(localStorage.getItem(key));
return (item!=null);

}

}
