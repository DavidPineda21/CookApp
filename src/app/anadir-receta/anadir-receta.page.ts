import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Plugins, CameraResultType, CameraSource, Geolocation, Camera } from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-anadir-receta',
  templateUrl: './anadir-receta.page.html',
  styleUrls: ['./anadir-receta.page.scss'],
})
export class AnadirRecetaPage implements OnInit {

  img = "assets/agg_img_plato.svg";
  foto: SafeResourceUrl;

  constructor( private storage:Storage, private sanitize: DomSanitizer) {
    this.storage.get('temaOscuro').then((result)=>{
      if(result=== true){
        document.body.setAttribute('color-theme','dark');
         
      }
      else{
        document.body.setAttribute('color-theme','light');
        
      }
    });
  
  }

  ngOnInit() {
    //this.anadir_card();
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


}
