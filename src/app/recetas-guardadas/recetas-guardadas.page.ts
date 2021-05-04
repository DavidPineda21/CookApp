import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Receta } from 'src/app/services/shared/receta';
import { RecetaService } from 'src/app/services/shared/receta.service';

@Component({
  selector: 'app-recetas-guardadas',
  templateUrl: './recetas-guardadas.page.html',
  styleUrls: ['./recetas-guardadas.page.scss'],
})
export class RecetasGuardadasPage implements OnInit {
  Recetas = [];
  constructor( private storage:Storage,private aptService: RecetaService) {
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
    this.fetchBookings();
    let bookingRes = this.aptService.getRecetaList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Recetas = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Recetas.push(a as Receta);
      })
    })
  }

  fetchBookings() {
    this.aptService.getRecetaList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  
  deleteReceta(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteReceta(id)
    }
  }

}



  

 


