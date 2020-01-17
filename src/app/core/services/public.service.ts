import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


export class Category{
private id: number;
private label: string;
}


export class Product{
  private id:	number;
  private	label: string;
  private	 category: Category;

}
export class UsedProduct{
  private id: number;
	private quantity: number;
	private unit: string;
 private	 product: Product;

}

export class Basket{

  private id: number;
	private beginDate: Date;
	private endDate: Date;
	private  cost: number;
	private ProductCount : number;
	private  quantityAvailable: number;
	private label: string;
	private listProduct: Product[];	
  private hasImage: boolean;
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
