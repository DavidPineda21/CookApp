import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarRegPage } from './cambiar-reg.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarRegPageRoutingModule {}
