import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ShoppingCartService } from './shopping-cart.service';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private db: AngularFireDatabase,
    private shoppingCardService: ShoppingCartService
  ) { }

  async placeOrder(order: any) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCardService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders').valueChanges();
  }

  getOrdersByUser(userId: string)  {
    return this.db.list('/orders', (ref) => {
      let q = ref.orderByChild('userId').equalTo(userId);
      return q;
    }).valueChanges();
  }
}







