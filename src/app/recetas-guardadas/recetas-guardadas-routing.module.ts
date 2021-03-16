import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasGuardadasPage } from './recetas-guardadas.page';

const routes: Routes = [
  {
    path: '',
    component: RecetasGuardadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasGuardadasPageRoutingModule {}
