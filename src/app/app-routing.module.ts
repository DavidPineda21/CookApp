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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 00def2c2c1dcd1209bd003356316bf8515ab1a25
  {
    path: 'resultado-anadir',
    loadChildren: () => import('./resultado-anadir/resultado-anadir.module').then( m => m.ResultadoAnadirPageModule)
  },
  
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
];
<<<<<<< HEAD
=======
>>>>>>> 0eb5d8515084eb2e06c474d4cb815c617db76078
=======
>>>>>>> 00def2c2c1dcd1209bd003356316bf8515ab1a25


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
