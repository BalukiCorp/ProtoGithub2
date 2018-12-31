import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import {SignUpPage} from "../sign-up/sign-up";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    loginForm: FormGroup;
    loginError: string;



  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthService, fb: FormBuilder) {
              this.loginForm = fb.group({
                email:['', Validators.compose([Validators.required, Validators.email])],
                password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
              });
  }

  login(){
    let data = this.loginForm.value;

    if(!data.email){
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password,
    };

    this.auth.signInWithEmail(credentials);

  }


itemTapped(){
    this.navCtrl.push(SignUpPage);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
