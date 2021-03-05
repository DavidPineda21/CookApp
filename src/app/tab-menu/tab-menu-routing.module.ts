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
        path:'',
        redirectTo:'/tabs/home',
        pathMatch:'full'
      },


       

    ]
  },
  {
    path:'',
    redirectTo:'/tabs/home',
    pathMatch:'full'
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMenuRoutingModule {}
