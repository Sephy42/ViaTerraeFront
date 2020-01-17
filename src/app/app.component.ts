import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Via Terrae';
  faHome = faHome;

  public constructor(private router: Router, private userService: UserService){

  }

  public currentUser(): boolean{
    return this.userService.isAuthenticated();
  }
  public deleteCurrentUser():void{
    this.userService.deleteUser();
  }
}