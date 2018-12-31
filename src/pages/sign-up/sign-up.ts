import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {HomePage} from '../home/home';
import {AuthService} from "../../services/auth.service";
import {TabsPage} from "../tabs/tabs";
import {LogoutPage} from "../logout/logout";
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

    signUpError: string;
    form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private auth:AuthService) {

      this.form = fb.group({
        email: ['',Validators.compose([Validators.required, Validators.email])],
        password:['',Validators.compose([Validators.required, Validators.minLength(6)])],
      });

  }



  signup(){
      let data = this.form.value;
      let credentials = {
          email: data.email,
          password: data.password,
      };
      this.auth.signUp(credentials).then(
        () => this.navCtrl.setRoot(LogoutPage),
        error => this.signUpError = error.message,
      );
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
