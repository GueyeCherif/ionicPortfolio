import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FolioPage } from "../pages/folio/folio";
import { ProjetsPage } from "../pages/projets/projets";
import { AproposPage } from "../pages/apropos/apropos";
import { BlogPage } from "../pages/blog/blog";
import { ContactPage } from "../pages/contact/contact";
import { SousProjetsPage } from "../pages/projets/sous-projets/sous-projets";
import { DetailProjetsPage } from "../pages/projets/detail-projets/detail-projets";
import { CherifProvider } from '../providers/cherif/cherif';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FolioPage,
    ProjetsPage,
    AproposPage,
    BlogPage,
    ContactPage,
    SousProjetsPage,
    DetailProjetsPage
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
    AproposPage,
    BlogPage,
    ContactPage,
    SousProjetsPage,
    DetailProjetsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CherifProvider
  ]
})
export class AppModule {}
