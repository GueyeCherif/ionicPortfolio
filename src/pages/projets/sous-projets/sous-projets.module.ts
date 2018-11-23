import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SousProjetsPage } from './sous-projets';

@NgModule({
  declarations: [
    SousProjetsPage,
  ],
  imports: [
    IonicPageModule.forChild(SousProjetsPage),
  ],
})
export class SousProjetsPageModule {}
