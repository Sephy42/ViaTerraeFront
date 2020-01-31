import { Injectable } from '@angular/core';
import { Basket } from './public.service';
import { Observable } from 'rxjs';

export class OrderedBasket {
  id: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  quantities: OrderedBasket[] = [];

  constructor() { }

  public getTotalQuantity(): number {
    if (this.quantities.length > 0) {
      let sum = 0;
      this.quantities.forEach(basket => sum = sum + basket.quantity)
      return sum;
    } else {
      return 0;
    }

  }

  public getQuantity(b: Basket): number {
    let index = this.quantities.map(o => o.id).indexOf(b.id);
    if (index >= 0) {
      return this.quantities[index].quantity;
    } else {
      return 0;

    }
  }

  public increment(b: Basket): void {

    let index = this.quantities.map(o => o.id).indexOf(b.id);
    if (index >= 0) {
      this.quantities[index].quantity = this.quantities[index].quantity + 1;
    } else {
      this.quantities.push({ id: b.id, quantity: 1 });

    }

  }

  public decrement(b: Basket): void {
    let index = this.quantities.map(o => o.id).indexOf(b.id);
    if (index >= 0) {
      this.quantities[index].quantity = this.quantities[index].quantity - 1;
    }

  }



}
