import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'anadir-receta',
    loadChildren: () => import('./anadir-receta/anadir-receta.module').then( m => m.AnadirRecetaPageModule)
  },
  {
    path: 'resultado-anadir',
    loadChildren: () => import('./resultado-anadir/resultado-anadir.module').then( m => m.ResultadoAnadirPageModule)
  },
  
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
