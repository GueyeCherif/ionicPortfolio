import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjetsPage } from '../projets/projets';


@Component({
  selector:'page-folio',
  templateUrl: 'folio.html',

})
export class FolioPage{
  constructor(public navCtrl: NavController) {

  }
  projet(){
    this.navCtrl.push(ProjetsPage);
  }
}
