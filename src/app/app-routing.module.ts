import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./tab-menu/tab-menu.module').then(m=> m.TabMenuPageModule)
<<<<<<< HEAD
  },
  
=======
  },   
>>>>>>> 95597698664ff22271406b00e9ec740e46a9f4d4

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
