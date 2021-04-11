import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-recetas-guardadas',
  templateUrl: './recetas-guardadas.page.html',
  styleUrls: ['./recetas-guardadas.page.scss'],
})
export class RecetasGuardadasPage implements OnInit {

  constructor( private storage:Storage) {
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
  }

}
