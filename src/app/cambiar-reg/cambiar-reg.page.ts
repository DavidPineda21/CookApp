import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-cambiar-reg',
  templateUrl: './cambiar-reg.page.html',
  styleUrls: ['./cambiar-reg.page.scss'],
})
export class CambiarRegPage implements OnInit {

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
