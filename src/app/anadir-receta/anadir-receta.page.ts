import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-anadir-receta',
  templateUrl: './anadir-receta.page.html',
  styleUrls: ['./anadir-receta.page.scss'],
})
export class AnadirRecetaPage implements OnInit {

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
    //this.anadir_card();
  }

  anadir_card() {
    const card = document.createElement("card");
    const guardar = document.getElementById("guardar");

    guardar.innerHTML = 
    `
    <ion-button id="guardar" onclick = "anadir_card()" expand="block" shape="round" >Pepe</ion-button>
    
    `

    document.body.appendChild(card);
  }
}
