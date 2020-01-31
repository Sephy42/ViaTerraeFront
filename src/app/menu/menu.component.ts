import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { PublicService } from '../core/services/public.service';
import { OrderService } from '../core/services/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private publicService: PublicService, private orderService: OrderService) { }

  title = 'Via Terrae';
  quantity: Observable<number>;
  
  ngOnInit() {
  }

  public currentUser(): boolean {
    return this.userService.isAuthenticated();
  }
  public deleteCurrentUser(): void {
    this.userService.deleteUser();
  }


}
