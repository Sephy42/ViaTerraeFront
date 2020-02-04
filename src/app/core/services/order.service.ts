import { Injectable } from '@angular/core';
import { Basket } from './public.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class PickupDate {
  id: number;
  date:  Date;
  minutesStart: number;
  minutesEnd: number ;
}

export class OrderedBasket {
  id: number;
  quantity: number;
  basketLabel: string;
  cost:number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  quantities: OrderedBasket[] = [];
  currentQuantity: BehaviorSubject<number>= new BehaviorSubject<number>(0);

  constructor(private httpClient: HttpClient) { }

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
      this.quantities.push({ id: b.id, quantity: 1, basketLabel:b.label ,cost: b.cost});

    }
this.currentQuantity.next(this.getTotalQuantity());

  }

  public decrement(b: Basket): void {
    let index = this.quantities.map(o => o.id).indexOf(b.id);
    if (index >= 0) {
      this.quantities[index].quantity = this.quantities[index].quantity - 1;
    }
    this.currentQuantity.next(this.getTotalQuantity());
  }

public getPickupDate():Observable<PickupDate[]> {
  return this.httpClient.get<PickupDate[]>(environment.apiUrl+'/private/pick/');

}

}
