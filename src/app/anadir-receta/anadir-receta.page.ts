import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Plugins, CameraResultType, CameraSource, Geolocation, Camera } from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { FormGroup, FormBuilder } from '@angular/forms';
import { RecetaService } from 'src/app/services/shared/receta.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-anadir-receta',
  templateUrl: './anadir-receta.page.html',
  styleUrls: ['./anadir-receta.page.scss'],
})
export class AnadirRecetaPage implements OnInit {

  CrearReceta: FormGroup;
  img = "assets/agg_img_plato.svg";
  foto: SafeResourceUrl;
  constructor(
      private aptService: RecetaService,
      public fb: FormBuilder,
      private router: Router,private storage:Storage,
      private sanitize: DomSanitizer) {
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
    this.CrearReceta= this.fb.group({
      Titulo: [''],
      Ingredientes: [''],
      Proceso: [''],
      Tiempo:[''],
      
    })
  }

  formSubmit() {
    if (!this.CrearReceta.valid) {
      return false;
    } else {
      this.aptService.createReceta(this.CrearReceta.value).then(res => {
        console.log(res)
        this.CrearReceta.reset();
        this.router.navigate(['/tabs/recetas-guardadas']);
      })
        .catch(error => console.log(error));
    }
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






  


  

  





