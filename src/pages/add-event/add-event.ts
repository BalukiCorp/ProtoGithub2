import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  event_name: string = '';
    manager_name: string = '';
    category: string = '';
    hour: string = '';
    ubication: string = '';
    date: string = '';
    today = Date.now();
    register = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  sendRegister(){
    var registerRef = firebase.database().ref().child("event_register");
    registerRef.push({event_name: this.event_name, manager_name: this.manager_name, 
      category: this.category, ubication: this.ubication, date: this.date, 
    hour: this.hour});
  }
}
