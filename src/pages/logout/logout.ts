import {Component, ViewChild} from '@angular/core';
import {IonicPage, MenuController, Nav, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {
  private menu: MenuController;
  private app;
  rootPage:any = HomePage;


  constructor(private auth: AuthService, menu:MenuController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }
  initializeApp(){

    this.auth.afAuth.authState.subscribe(
      user => {
        if(user){
          this.rootPage = HomePage;
        }else{
          this.rootPage = LoginPage;
        }
      },
      () => {
        this.rootPage = LoginPage;
      }
    );
  }
  login(){
    //this.menu.close();
    this.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  logout(){
    //this.menu.close();
    this.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  openPage(page){
   // this.menu.close();
    this.navCtrl.setRoot(page);
  }
}
