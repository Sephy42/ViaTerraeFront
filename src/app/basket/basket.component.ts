import { Component, OnInit } from '@angular/core';
import { PublicService, Basket } from '../core/services/public.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketsComponent implements OnInit {

  constructor(private publicService: PublicService) { }

  paniers: Basket[];


  ngOnInit() {
    this.publicService.getBaskets().subscribe(data =>{
      this.paniers = data;
      console.log(data);
    }

    );
  }

}
