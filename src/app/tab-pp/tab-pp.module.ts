import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPpRoutingModule } from './tab-pp-routing.module';

import { TabPpPage } from './tab-pp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPpRoutingModule
  ],
  declarations: [TabPpPage]
})
export class TabPpPageModule {}
