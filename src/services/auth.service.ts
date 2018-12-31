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
  //Login - Registro con Email
    signInWithEmail(credentials){
        console.log('Iniciando sesion con email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    }





    //Login - Registro con Google Account


    //SignUP - Con Email

    signUp(credentials){
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }
}
