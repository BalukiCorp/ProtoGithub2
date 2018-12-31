import {Component, ViewChild} from '@angular/core';
import { Platform, MenuController,Nav, NavParams} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {TabsPage} from "../pages/tabs/tabs";
import {AuthService} from "../services/auth.service";
import {LoginPage} from "../pages/login/login";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  private menu: MenuController;
  private app;
  @ViewChild(Nav) nav:Nav;

  constructor( menu:MenuController,public platform: Platform, public statusBar: StatusBar, splashScreen: SplashScreen,private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });

  }

  initializeApp(){
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
      });

  }




  openPage(page){
    this.menu.close();
    this.nav.setRoot(page);
  }

}

