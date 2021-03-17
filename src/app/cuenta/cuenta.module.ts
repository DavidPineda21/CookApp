import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaPageRoutingModule } from './cuenta-routing.module';

import { CuentaPage } from './cuenta.page';

import {CambiarRegPage }from '../cambiar-reg/cambiar-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule
  ],
  declarations: [CuentaPage, CambiarRegPage],
  entryComponents:[CambiarRegPage]
})
export class CuentaPageModule {}
