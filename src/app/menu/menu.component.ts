import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

 constructor(private router: Router, private userService: UserService){}
 
 title = 'Via Terrae';
  ngOnInit() {
  }
  
 
  public currentUser(): boolean{
    return this.userService.isAuthenticated();
  }
  public deleteCurrentUser():void{
    this.userService.deleteUser();
  }
}
