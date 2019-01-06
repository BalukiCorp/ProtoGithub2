import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {AddEventPage} from '../add-event/add-event'
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  event_name: string = '';
  manager_name: string = '';
  category: string = '';
  hour: string = '';
  ubication: string = '';
  date: string = '';
  today = Date.now();
  register = [];
 // items;

  constructor(public navCtrl: NavController) {
    this.getEvent();
    //  this.initializeItems();
  }

 /* initializeItems() {
    this.items = [
      'Fiestas',
      'Festivales',
      'Conciertos',
      'Gastronomia',

    ];
  }
*/
  getEvent(){
    var registerRef = firebase.database().ref().child("event_register");

    registerRef.on("value", (snap) => {
      var dataInDatabase = snap.val();
      this.register = [];
      for(var key in dataInDatabase){
        this.register.push(dataInDatabase[key]);
      }
    });
  }

  /*getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  */
}
