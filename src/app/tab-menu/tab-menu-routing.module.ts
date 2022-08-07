import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMenuPage } from './tab-menu.page';

const routes: Routes = [
  {
    path:'tabs',
    component: TabMenuPage,
    children: [
      {
        path: 'anadir-receta',
        children:[
          {
            path:'',
            loadChildren:() => import('../anadir-receta/anadir-receta.module').then(m=> m.AnadirRecetaPageModule)
          }

        ] 
      },

      {
        path: 'cuenta',
        children:[
          {
            path:'',
            loadChildren:() => import('../cuenta/cuenta.module').then(m=> m.CuentaPageModule)
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

      {
        path: 'recetas-guardadas',
        children:[
          {
            path:'',
            loadChildren:() => import('../recetas-guardadas/recetas-guardadas.module').then(m=> m.RecetasGuardadasPageModule)
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
       
      
    
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabMenuRoutingModule {}
