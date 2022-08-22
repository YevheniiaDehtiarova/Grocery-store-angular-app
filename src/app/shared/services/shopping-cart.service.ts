import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime(),
    });
  }

  public async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).valueChanges()
    .pipe(map( (x:any) => new ShoppingCart(x.items)))
  }

  public async addToCart(product: Product) {
    this.updateItem(product, 1);
  }

  public async removeFromCart(product: Product){
    this.updateItem(product, -1);
  }

  async clearCart(){
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/'+ cartId + '/items/'+ productId);
   }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;
   
    let result = await this.create() as any;
    localStorage.setItem('cartId', result.key);
    return result.key;

  }

  private async updateItem(product:Product, change: number) {
    let cartId =  await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.id);
    let quantity = product.quantity + change;
    if(quantity === 0 ) item$.remove();
    else
    item$.set({ title: product.title, 
                imageUrl: product.imageUrl,
                price: product.price,
                id: product.id,
                quantity: quantity});
    }
  }

