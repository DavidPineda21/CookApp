import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidiesPageRoutingModule } from './slidies-routing.module';

import { SlidiesPage } from './slidies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidiesPageRoutingModule
  ],
  declarations: [SlidiesPage]
})
export class SlidiesPageModule {}
