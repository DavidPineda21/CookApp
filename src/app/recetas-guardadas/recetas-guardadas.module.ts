import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetasGuardadasPageRoutingModule } from './recetas-guardadas-routing.module';

import { RecetasGuardadasPage } from './recetas-guardadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasGuardadasPageRoutingModule
  ],
  declarations: [RecetasGuardadasPage]
})
export class RecetasGuardadasPageModule {}
