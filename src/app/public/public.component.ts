import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from '../core/services/public.service';
import {Basket} from '../core/services/public.service';
import { OrderService } from '../core/services/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOrderComponent } from '../modal-order/modal-order.component';




@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

 basketList: Basket[] =[];

  constructor ( private publicService: PublicService, private router: Router, private orderService: OrderService,private modalService:NgbModal) { }
  
    ngOnInit() {
      this.publicService.getWeekBasket().subscribe(baskets=> {  
        this.basketList = baskets;
              }, error =>{
              console.log(error);
            });
    }
  
public getQuantity(b: Basket): number{
 return this.orderService.getQuantity(b);
}

  public increment(b: Basket):void{
    return this.orderService.increment(b);
   }

   public decrement(b: Basket):void{
    return this.orderService.decrement(b);
   }

   open() {

    this.modalService.open(ModalOrderComponent).result.then((result) => {
      
    }, (reason) => {
      
    });

  }
}





