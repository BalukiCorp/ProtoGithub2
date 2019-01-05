import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items;

  constructor(public navCtrl: NavController) {
      this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Fiestas',
      'Festivales',
      'Conciertos',
      'Gastronomia',

    ];
  }
}
