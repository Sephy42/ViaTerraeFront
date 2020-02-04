import { Component, Input} from '@angular/core';
import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../core/services/order.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.scss']
})
export class ModalOrderComponent {
  @Input()
  cost= this.getCost();


  constructor(public activeModal: NgbActiveModal, private orderService: OrderService) { }

public getCost():number {
  let sum:number=0;
  this.orderService.quantities.forEach(orderedBasket => sum=sum+orderedBasket.quantity* orderedBasket.cost );
  return sum;
}

}
