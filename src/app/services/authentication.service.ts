import {inject, Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GoogleAuthProvider, AuthProvider} from "firebase/auth";

import {Auth, authState} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private auth = inject(Auth)
  authState$ = authState(this.auth)

  constructor(public afAuth: AngularFireAuth) {

  }

  GoogleAuth() {
    const g = new GoogleAuthProvider();
    return this.AuthLogin(g);
  }

  async AuthLogin(provider: AuthProvider) {
    try {
      await this.afAuth
        .signInWithPopup(provider);
      console.log('You have been successful login');
    } catch (error) {
      console.log(error);
    }
  }

}
