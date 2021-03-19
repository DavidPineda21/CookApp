import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private router:Router,private storage:Storage) {
    this.storage.get('temaOscuro').then((result)=>{
      if(result=== true){
        document.body.setAttribute('color-theme','dark');
         
      }
      else{
        document.body.setAttribute('color-theme','light');
      }
    })

    this.storage.get('sesioniniciada').then((result)=>{
      console.log(result);
      if(result){
      this.router.navigateByUrl('tabs/home');
      }
    });
  }
        
  

  ngOnInit() {
  }

}
