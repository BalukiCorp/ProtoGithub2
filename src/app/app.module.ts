import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';

import{AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {firebaseConfig} from '../firebaseConfig';
import {TabsPage} from "../pages/tabs/tabs";
import {AuthService} from "../services/auth.service";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {NgxErrorsModule} from "@ultimate/ngxerrors";
import {LogoutPage} from "../pages/logout/logout";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    SignUpPage,
    LogoutPage,
  ],
  imports: [
    BrowserModule,
    NgxErrorsModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    SignUpPage,
    LogoutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
