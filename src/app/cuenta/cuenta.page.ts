import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {Plugins, CameraResultType, CameraSource, Geolocation, Camera} from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import {CambiarRegPage }from '../cambiar-reg/cambiar-reg.page';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  toggleActive=false;
  img = "assets/usuario.svg";
  foto: SafeResourceUrl;

  constructor( private router:Router, public popoverController:PopoverController,private storage:Storage, private sanitize: DomSanitizer) {
  }

  ngOnInit() {
  }

  async tomarfoto(){
    const imagen = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.foto = this.sanitize.bypassSecurityTrustResourceUrl(imagen && imagen.dataUrl);
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
