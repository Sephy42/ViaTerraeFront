import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, IUser } from '../core/services/user.service';
import { PublicService } from '../core/services/public.service';
import { OrderService } from '../core/services/order.service';
import { Observable, Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOrderComponent } from '../modal-order/modal-order.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  

  constructor(private router: Router, private userService: UserService, private publicService: PublicService, private orderService: OrderService,private modalService:NgbModal) {

   }

  sub: Subscription;
  sub2: Subscription;
  title = 'Via Terrae';
  quantity:number;
  currentUser:IUser=null;
  
  ngOnInit() {
    this.sub=this.orderService.currentQuantity.subscribe(res => this.quantity=res);
    this.sub2=this.userService.currentClient.subscribe(res => this.currentUser=res);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

  public deleteCurrentUser(): void {
    this.userService.deleteUser();
  }

  open() {

    this.modalService.open(ModalOrderComponent).result.then((result) => {
      
    }, (reason) => {
      
    });

  }  

}
