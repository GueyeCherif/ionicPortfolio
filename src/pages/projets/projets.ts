import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SousProjetsPage } from './sous-projets/sous-projets';

@IonicPage()
@Component({
  selector: 'page-projets',
  templateUrl: 'projets.html',
})
export class ProjetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetsPage');
  }
  sousprojet(){
    this.navCtrl.push(SousProjetsPage);
  }
}
