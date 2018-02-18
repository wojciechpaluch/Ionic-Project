import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemApi } from '../services/item-api.service';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LocalNotifications} from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    ContactPage,
    HomePage,
    NewsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    LocalNotifications,
    SplashScreen,
    ItemApi,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
