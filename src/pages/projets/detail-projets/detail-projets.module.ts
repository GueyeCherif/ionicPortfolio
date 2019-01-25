import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailProjetsPage } from './detail-projets';

@NgModule({
  declarations: [
    DetailProjetsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailProjetsPage),
  ],
})
export class DetailProjetsPageModule {}
