import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoAnadirPage } from './resultado-anadir.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoAnadirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoAnadirPageRoutingModule {}
