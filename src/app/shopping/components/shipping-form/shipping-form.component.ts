import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from '../../../shared/models/order.model';
import { Shipping } from '../../../models/shipping.model';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent {
  @Input('cart') cart: ShoppingCart;
  public shipping = new Shipping();
  public subscription: Subscription;
  
  constructor(private orderService: OrderService,
              private router: Router) { }

  async placeOrder() {
    let order = new Order(this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
   } 

}
