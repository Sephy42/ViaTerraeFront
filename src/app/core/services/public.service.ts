import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


export class Category{
id: number;
 label: string;
}


export class Product{
   id:	number;
 	label: string;
  category: Category;
}

export class UsedProduct{
  id: number;
 quantity: number;
 unit: string;
 	 product: Product;

}

export class Basket{

  id: number;
 beginDate: Date;
	endDate: Date;
	cost: number;
	ProductCount : number;
	quantityAvailable: number;
	label: string;
	listProduct: UsedProduct[];	
  hasImage: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PublicService {
 
  constructor(private httpClient: HttpClient) { }

  public getWeekBasket(): Observable<Basket[]> {
  return  this.httpClient.get<Basket[]>(`${environment.apiUrl}/public/baskets`);
  }

  
  
}
