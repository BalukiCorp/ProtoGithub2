import { Component, OnInit } from '@angular/core';
import { NavController, normalizeURL } from 'ionic-angular';
import {AddEventPage} from '../add-event/add-event'
import * as firebase from 'firebase';
import{AuthService} from '../../services/auth.service';
//import {Observable} from 'rxjs-compat/Observable';
import {Observable} from 'rxjs/observable';
import { AddEventPageModule } from '../add-event/add-event.module';
import { UserInterface } from '../../app/models/user';

var imagenesFBRef;
var imageneStorageRef;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
  imagenesFBRef = firebase.database().ref().child("imagenesFB");
  strageRef = firebase.storage().ref().child("event_upload");
  event_name: string = '';
  manager_name: string = '';
  category: string = '';
  hour: string = '';
  ubication: string = '';
  date: string = '';
  today = Date.now();
  register = [];
 // items;

  constructor(public navCtrl: NavController ) {
    this.getEvent();
    //  this.initializeItems();
  }
user: UserInterface={
  photoUrl:''
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
      this.user.photoUrl = this.user.photoUrl;
      for(var key in dataInDatabase){
        this.register.push(dataInDatabase[key]);
        this.user.photoUrl = this.user.photoUrl;
                
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
