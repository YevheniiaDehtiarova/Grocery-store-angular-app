import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { getAuth, User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user:any;

  constructor(private db: AngularFireDatabase) {
    const auth = getAuth();
    this.user = auth.currentUser;
   }

  save(user: User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }

  get(uid: string): AngularFireObject<AppUser>  {
    return this.db.object('/users' + uid)
  }
}
