import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  constructor(private router:Router, private storage:Storage) { 
 
  }

  ngOnInit() {
  }

  sesion(){
    this.storage.set('sesioniniciada','prueba');
    this.router.navigateByUrl('/tabs/home'); 
   }

}
