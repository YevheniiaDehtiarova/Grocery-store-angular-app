
import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$:any = [];
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 
  }
  ngOnInit(): void {
    this.orders$ = this.orderService.getOrdersByUser('755');
  }
}
