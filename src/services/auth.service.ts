import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()

export class AuthService {

  private user: firebase.User;

    constructor(public afAuth: AngularFireAuth){
      afAuth.authState.subscribe(user => {
          this.user = user;
      });
    }
    signInWithEmail(credentials){
        console.log('Iniciando sesion con email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    }


    //Login - Registro con Email


    //Login - Registro con Google Account
}