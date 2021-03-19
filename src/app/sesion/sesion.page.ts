import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';
import { RegistrarsePage } from '../registrarse/registrarse.page';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  constructor(private router:Router, public popoverController:PopoverController,private storage:Storage) {
    this.storage.get('temaOscuro').then((result)=>{
      if(result=== true){
        document.body.setAttribute('color-theme','dark');
         
      }
      else{
        document.body.setAttribute('color-theme','light');
        
      }
    });
   
      
     
   }

  async abrirPopover(ev: any ){
    const popover = await this.popoverController.create({
      component: RegistrarsePage,
      cssClass: 'pepe',
      event: ev,
      translucent: true,
      mode:'ios'
    });


    return await popover.present();

  }

  ngOnInit() {
  }

  sesion(){
    this.storage.set('sesioniniciada',true);
    this.router.navigateByUrl('/tabs/home'); 
   }

}
