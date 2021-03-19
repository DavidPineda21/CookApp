import { Component, OnInit } from '@angular/core';

import { PopoverController} from '@ionic/angular';

import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

//componente
import {CambiarRegPage }from '../cambiar-reg/cambiar-reg.page';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  toggleActive=false;

  constructor( private router:Router, public popoverController:PopoverController,private storage:Storage) {
    this.storage.get('temaOscuro').then((result)=>{
      if(result=== true){
        document.body.setAttribute('color-theme','dark');
        this.toggleActive=true; 
      }
      else{
        document.body.setAttribute('color-theme','light');
        this.toggleActive=false;
      }
    });
   }

  ngOnInit() {
  }

  async abrirPopover(ev: any ){
    const popover = await this.popoverController.create({
      component: CambiarRegPage,
      cssClass: 'my-popover-class',
      event: ev,
      translucent: true,
      mode:'ios'
    });
    return await popover.present();

  }

  modoscuro(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
      this.storage.set('temaOscuro',true)
    }else{
      document.body.setAttribute('color-theme','light');
      this.storage.set('temaOscuro',false)
    }
  }

  Csesion(){
    this.storage.set('sesioniniciada',false);
    this.router.navigateByUrl('/tab/home'); 
   }

}
