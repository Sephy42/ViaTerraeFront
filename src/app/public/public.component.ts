import { Component, OnInit } from '@angular/core';
import { PublicService } from '../core/services/public.service';
import {Basket} from '../core/services/public.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(private publicService: PublicService) { }

  basketList: Basket[] = null;
  
    ngOnInit() {
      this.publicService.getWeekBasket().subscribe(baskets=> {
  
        this.basketList = baskets;
        
                console.log(baskets);
              }, error =>{
              console.log(error);
            }
            );
  
    }
  
   

}





