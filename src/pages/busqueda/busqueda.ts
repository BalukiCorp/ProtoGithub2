import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import {storage, initializeApp} from 'firebase';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {
  event_name: string = '';
    manager_name: string = '';
    category: string = '';
    hour: string = '';
    ubication: string = '';
    date: string = '';
    today = Date.now();
    register = [];
   nombre: string= "";
   genero: string= "";
   usuario: string= "";
 //  registro = [];
items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getEvent();
 //this.getRegistro();
 
  }

  initializeItems() {
    this.items = [
      'PARTY',
      'FESTIVITIES',
      'CONCERTS',
      'GASTRONOMY',

    ];
  }

/*
  getRegistro(){
    var registroRef = firebase.database().ref().child("registro");
    registroRef.on("value", (snap)=>{
      var data = snap.val();
      this.registro = [];
      for(var key in data){
        this.registro.push(data[key]);
      }
    });
  }
*/
  sendRegistro(){
     var registroRef = firebase.database().ref().child("registro");
     registroRef.push({nombre: this.nombre, genero: this.genero, usuario: this.usuario});
  }

  getItems(ev) {
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
  
// FUNCION PASAR PARAMETROS ALMACENADOS EN FIREBASE
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

}
