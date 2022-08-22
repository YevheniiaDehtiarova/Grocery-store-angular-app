import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Shipping } from '../../../models/shipping.model';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent  { 
  shipping = new Shipping();
  public cart$: Observable<ShoppingCart>;

  constructor(private shoppingCardService: ShoppingCartService) {
    
  }
  async ngOnInit() {
    this.cart$ = await this.shoppingCardService.getCart();
  }
  
}
