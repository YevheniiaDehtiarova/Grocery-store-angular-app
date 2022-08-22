import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Product } from '../../models/product';
import { ShoppingCart } from '../../models/shopping-cart';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') public shoppingCard: ShoppingCart;

  constructor(private cardService: ShoppingCartService) { }

  addToCart() {
    this.cardService.addToCart(this.product);
  }

  removeFromCart() {
    this.cardService.removeFromCart(this.product);
  }

}
