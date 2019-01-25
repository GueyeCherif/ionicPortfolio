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


  sousprojet(name:string){
    this.navCtrl.push(SousProjetsPage, {sousprojetName: name});
  }
}
