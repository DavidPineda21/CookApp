import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab-pp',
  templateUrl: './tab-pp.page.html',
  styleUrls: ['./tab-pp.page.scss'],
})
export class TabPpPage implements OnInit {

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
