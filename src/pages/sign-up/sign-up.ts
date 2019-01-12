import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {HomePage} from '../home/home';
import {AuthService} from "../../services/auth.service";
import {TabsPage} from "../tabs/tabs";
import {LogoutPage} from "../logout/logout";
import * as firebase from 'firebase';
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
    name: string = '';
    gender: string = '';
    username: string = '';
    register = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private auth:AuthService) {

      this.form = fb.group({
        email: ['',Validators.compose([Validators.required, Validators.email])],
        password:['',Validators.compose([Validators.required, Validators.minLength(6)])],
      });

    this.getRegister();

  }

  sendRegister(){
    var registerRef = firebase.database().ref().child("registro");
    registerRef.push({nombre: this.name, genero: this.gender, usuario: this.username});
  }

  getRegister(){
    var registerRef = firebase.database().ref().child("registro");

    registerRef.on("value", (snap) => {
      var dataInDatabase = snap.val();
      this.register = [];
      for(var key in dataInDatabase){
        this.register.push(dataInDatabase[key]);
      }
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