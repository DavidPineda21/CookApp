import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-slidies',
  templateUrl: './slidies.page.html',
  styleUrls: ['./slidies.page.scss'],
})
export class SlidiesPage implements OnInit {

  constructor(private router:Router, private storage:Storage) {

    this.storage.get('slidesvistos').then((result)=>{
      if(result=== true){
        this.router.navigateByUrl('tab/home');
      }
    });

   }

  ngOnInit() {
  }

  skip(){
   this.storage.set('slidesvistos',true);
   this.router.navigateByUrl('/tab/home'); 
  }

}
