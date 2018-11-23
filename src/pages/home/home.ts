import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FolioPage} from "../folio/folio";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 folio(){
    this.navCtrl.push(FolioPage);
  }

}
