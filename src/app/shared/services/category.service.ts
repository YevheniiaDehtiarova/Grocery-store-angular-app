import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
// import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  getCategories(){
    return this.db.list('/categories').valueChanges();
  }
}
