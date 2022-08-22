import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Product } from '../../../shared/models/product';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCardComponent implements OnInit {
  public cart$: Observable<ShoppingCart>;
  public product: Partial<Product>;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.cart$.subscribe((cart) => {
      cart.items.map(item => {
        this.product = Object.assign(item);
    });
  })
}
 clearCart(){
  this.shoppingCartService.clearCart()
 }
}
