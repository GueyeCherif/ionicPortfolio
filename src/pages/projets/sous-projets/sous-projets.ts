import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailProjetsPage } from '../detail-projets/detail-projets';

@IonicPage()
@Component({
  selector: 'page-sous-projets',
  templateUrl: 'sous-projets.html',
})
export class SousProjetsPage {


  constructor(public navCtrl: NavController,public navParams: NavParams) {
  }
  desc(){
  this.navCtrl.push(DetailProjetsPage);
  }
  speci(){
  this.navCtrl.push(DetailProjetsPage);
  }
  date(){
  this.navCtrl.push(DetailProjetsPage);
  }
  etape(){
  this.navCtrl.push(DetailProjetsPage);
  }
  team(){
  this.navCtrl.push(DetailProjetsPage);
  }
  diffi(){
  this.navCtrl.push(DetailProjetsPage);
  }
  dev(){
  this.navCtrl.push(DetailProjetsPage);
  }
  lien(){
  this.navCtrl.push(DetailProjetsPage);
  }


}
