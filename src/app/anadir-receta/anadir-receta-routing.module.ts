import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirRecetaPage } from './anadir-receta.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirRecetaPageRoutingModule {}
