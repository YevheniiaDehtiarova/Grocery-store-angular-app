import { Injectable } from '@angular/core';
import * as fireBase from '@firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, User } from 'firebase/auth';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'environments/environment.prod';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public emailVerified: boolean;
  public userName: string;
  public user: User;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    fireBase.initializeApp(environment.firebase);
    const auth = getAuth();
    this.user = auth.currentUser as User;
  }

  login() {
    fireBase.initializeApp(environment.firebase);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(auth, provider);
  }

  logout() {
    this.afAuth.signOut();
  }
}
