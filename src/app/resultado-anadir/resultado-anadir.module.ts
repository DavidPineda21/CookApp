import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoAnadirPageRoutingModule } from './resultado-anadir-routing.module';

import { ResultadoAnadirPage } from './resultado-anadir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoAnadirPageRoutingModule
  ],
  declarations: [ResultadoAnadirPage]
})
export class ResultadoAnadirPageModule {}
