import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjetsPage } from '../projets/projets';
import { AproposPage } from '../apropos/apropos';
import { BlogPage } from '../blog/blog';
import { ContactPage } from '../contact/contact';


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
  propos(){
    this.navCtrl.push(AproposPage);
  }
  blog(){
    this.navCtrl.push(BlogPage);
  }
  contact(){
    this.navCtrl.push(ContactPage);
  }
}
