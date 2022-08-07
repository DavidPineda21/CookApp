import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarRegPageRoutingModule } from './cambiar-reg-routing.module';

import { CambiarRegPage } from './cambiar-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarRegPageRoutingModule
  ],
  declarations: [CambiarRegPage]
})
export class CambiarRegPageModule {}
