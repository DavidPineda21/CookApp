import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidiesPage } from './slidies.page';

const routes: Routes = [
  {
    path: '',
    component: SlidiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidiesPageRoutingModule {}
