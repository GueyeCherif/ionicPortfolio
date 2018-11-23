import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FolioPage } from "../pages/folio/folio";
import { ProjetsPage } from "../pages/projets/projets";
import { SousProjetsPage } from "../pages/projets/sous-projets/sous-projets";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FolioPage,
    ProjetsPage,
    SousProjetsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FolioPage,
    ProjetsPage,
    SousProjetsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
