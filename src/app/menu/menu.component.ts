import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { PublicService } from '../core/services/public.service';
import { OrderService } from '../core/services/order.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  

  constructor(private router: Router, private userService: UserService, private publicService: PublicService, private orderService: OrderService) { }

  sub: Subscription;
  title = 'Via Terrae';
  quantity:number;
  
  ngOnInit() {
    this.sub=this.orderService.currentQuantity.subscribe(res => this.quantity=res);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public currentUser(): boolean {
    return this.userService.isAuthenticated();
  }
  public deleteCurrentUser(): void {
    this.userService.deleteUser();
  }


}
