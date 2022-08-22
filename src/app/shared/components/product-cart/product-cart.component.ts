import { Component, Input, OnInit } from '@angular/core';import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Product } from '../../models/product';
import { ShoppingCart } from '../../models/shopping-cart';


@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') public shoppingCard: ShoppingCart;

  constructor(private cardService: ShoppingCartService) { }

  addToCart() {
    this.cardService.addToCart(this.product);;
  }

}

