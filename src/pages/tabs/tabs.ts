import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";
import {LogoutPage} from "../logout/logout";
import {AddEventPage} from "../add-event/add-event";
import { BusquedaPage } from '../busqueda/busqueda';
import {RankingPage} from '../ranking/ranking';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
    homeRoot = HomePage;
    profileRoot = ProfilePage;
    settingsRoot = LogoutPage;
    addEventRoot = AddEventPage;
    searchRoot = BusquedaPage;
    rankingRoot = RankingPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
