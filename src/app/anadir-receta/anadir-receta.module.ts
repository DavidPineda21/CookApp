import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AnadirRecetaPageRoutingModule } from './anadir-receta-routing.module';

import { AnadirRecetaPage } from './anadir-receta.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AnadirRecetaPageRoutingModule
  ],
  declarations: [AnadirRecetaPage]
})
export class AnadirRecetaPageModule {}

