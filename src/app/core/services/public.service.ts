import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Product {
	id : number;
	label : string;
}

export interface UsedProduct {
	id : number;
	quantity : number;
	unit : string;
	product : Product;
}

export interface Basket {
   	id : number;
	 beginDate : Date;
	 endDate : Date;
	 cost : number;
	 productCount : number;
	 quantityAvailable : number;
	 label : string;
	 listProduct : UsedProduct[] ;
	
	// Set<UsedProduct> listProduct;
	 //Picture picture;
}


@Injectable({
  providedIn: 'root'
})
export class PublicService {
  
  private basketList = 'http://localhost:9999/api/public/baskets';
  private usedProductList = 'http://localhost:9999/api/public/baskets';

  constructor(private httpClient: HttpClient) { }

  public getBaskets(): Observable<Basket[]> {
    return this.httpClient.get<Basket[]>(this.basketList);
  }

/*  public getUsedProducts(): Observable<UsedProduct[]> {
    return this.httpClient.get<UsedProduct[]>(this.usedProductList);
  }*/

}
