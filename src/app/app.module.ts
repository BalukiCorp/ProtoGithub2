import { MbscModule } from '@mobiscroll/angular-lite';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireStorageModule} from '@angular/fire/storage';
import{AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {firebaseConfig} from '../firebaseConfig';
import {TabsPage} from "../pages/tabs/tabs";
import {AuthService} from "../services/auth.service";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {NgxErrorsModule} from "@ultimate/ngxerrors";
import {LogoutPage} from "../pages/logout/logout";
import {AddEventPage} from "../pages/add-event/add-event";
import { BusquedaPage } from '../pages/busqueda/busqueda';
import {RankingPage} from '../pages/ranking/ranking';
import {ProfilePage} from "../pages/profile/profile";
import {LoginPage} from "../pages/login/login";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    SignUpPage,
    LogoutPage,
    AddEventPage,
    BusquedaPage,
    RankingPage,
    ProfilePage
  ],
  imports: [ 
    MbscModule, 
    FormsModule, 
    BrowserModule,
    NgxErrorsModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    IonicModule.forRoot(MyApp),
    AngularFireStorageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    SignUpPage,
    LogoutPage,
    AddEventPage,
    BusquedaPage,
    RankingPage,
    ProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AuthService,
    {provide: NG_VALUE_ACCESSOR, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
//ErrorHandler