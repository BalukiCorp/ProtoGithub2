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

  // Agarrar si el ingreso a sido autenticado --> Uso en Logout!
    get autheticated():boolean{
      return this.user !== null;
    }
  //Agarrar si el Email fue ingresado
    public getEmail(){
      return this.user && this.user.email;
    }
    //Cerrar Sesion
    signOut(): Promise<void> {
      return this.afAuth.auth.signOut();
}

    //Login - Registro con Google Account


    //SignUP - Con Email

    signUp(credentials){
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }
}
