import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  
  create(product: any) {
    return this.db.list('/products').push(product);
  }
  getAll(): any {
    return this.db.list('/products').valueChanges();
  }

  get(productId: number) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId: string, product: Product) { 
    return this.db.object('/products/' + productId).update(product);
  }
  
  delete(productId: number){
    return this.db.object('/products/' + productId).remove();
  }
}
