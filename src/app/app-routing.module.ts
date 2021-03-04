import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'slides',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
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
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
  },  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

=======
  
  {
    path: '',
    loadChildren: () => import('./tab-menu/tab-menu.module').then(m=> m.TabMenuPageModule)
  } 
>>>>>>> 8919b32b76fb072a58aaa30ffe3e24ac49f2e477

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
