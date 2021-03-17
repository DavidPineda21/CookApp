import { Component, OnInit } from '@angular/core';

import { PopoverController} from '@ionic/angular';

//componente
import {CambiarRegPage }from '../cambiar-reg/cambiar-reg.page';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor( public popoverController:PopoverController) { }

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
      document.body.setAttribute('color-theme','dark')
    }else{
      document.body.setAttribute('color-theme','light')
    }
  }

}
