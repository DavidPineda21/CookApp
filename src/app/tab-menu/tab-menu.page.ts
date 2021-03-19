import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.page.html',
  styleUrls: ['./tab-menu.page.scss'],
})
export class TabMenuPage implements OnInit {

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
