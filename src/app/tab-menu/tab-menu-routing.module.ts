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
          path: 'buscar',
          children:[
            {
              path:'',
              loadChildren:() => import('../buscar/buscar.module').then(m=> m.BuscarPageModule)
            }
  
          ] 
        },
      
        {
          path: 'cuenta',
          children:[
            {
              path:'',
              loadChildren:() => import('../slidies/slidies.module').then(m=> m.SlidiesPageModule)
            }
  
          ] 
        },
      {
        path:'',
        redirectTo:'/tabs/anadir-receta',
        pathMatch:'full'
      },


       

    ]
  },
  {
    path:'',
    redirectTo:'/tabs/anadir-receta',
    pathMatch:'full'
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMenuRoutingModule {}
