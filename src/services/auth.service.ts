import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import {assertLessThan} from "@angular/core/src/render3/assert";

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
  signInWithGoogle(){
    console.log('Iniciado Sesion con Google');
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }
    //Se declara funcion que toma parametros de signInWithGoogle
    private oauthSignIn(provider: AuthProvider){
          if(!(<any>window).cordova){
            return this.afAuth.auth.signInWithPopup(provider);
          }else{
            return this.afAuth.auth.signInWithRedirect(provider).then(
              ()=>{
                return this.afAuth.auth.getRedirectResult().then(
                  result=>{
                    let token = result.credential.accessToken;
                    let user = result.user;
                    console.log( token,user);
                  }
                ).catch(function (error) {
                  alert(error.message);
                });
              }
            );
          }
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



    //SignUP - Con Email

    signUp(credentials){
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }
}
