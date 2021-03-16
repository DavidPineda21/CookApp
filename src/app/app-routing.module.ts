import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'slidies',
    loadChildren: () => import('./slidies/slidies.module').then(m=> m.SlidiesPageModule)
  },
  
  {
    path:'',
    redirectTo:'slidies',
    pathMatch:'full'
  },
  
  {
    path: '',
    loadChildren: () => import('./tab-menu/tab-menu.module').then(m=> m.TabMenuPageModule)
  },
  
  {
    path: '',
    loadChildren: () => import('./tab-pp/tab-pp.module').then( m => m.TabPpPageModule)
  },

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
