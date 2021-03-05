import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPpPage } from './tab-pp.page';

const routes: Routes = [
  {
    path:'tab',
    component: TabPpPage,
    children: [

      {
        path: 'sesion',
        children:[
          {
            path:'',
            loadChildren:() => import('../sesion/sesion.module').then(m=> m.SesionPageModule)
          }

        ] 
      },

      {
        path: 'buscar',
        children:[
          {
            path:'',
            loadChildren:() => import('../buscar/buscar.module').then(m=> m.BuscarPageModule)
          }

        ] 
      },
    
      {
        path: 'home',
        children:[
          {
            path:'',
            loadChildren:() => import('../home/home.module').then(m=> m.HomePageModule)
          }

        ] 
      },

        
        
      

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPpRoutingModule {}
