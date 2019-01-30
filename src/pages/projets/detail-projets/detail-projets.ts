import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailProjetsPage } from '../detail-projets/detail-projets';

/**
 * Generated class for the DetailProjetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-projets',
  templateUrl: 'detail-projets.html',
})
export class DetailProjetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailProjetsPage');
  }

}
