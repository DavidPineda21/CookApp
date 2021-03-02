import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirRecetaPageRoutingModule } from './anadir-receta-routing.module';

import { AnadirRecetaPage } from './anadir-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirRecetaPageRoutingModule
  ],
  declarations: [AnadirRecetaPage]
})
export class AnadirRecetaPageModule {}
