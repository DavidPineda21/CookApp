import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor( private storage:Storage, private authSvc:AuthService, private router:Router) {
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

  async Registrar(email,password){
    try{
      const user= await this.authSvc.registrar(email.value, password.value);
      if(user){
        const verificado= this.authSvc.estaEmailVerificado(user);
        this.redireccionDeUsuario(verificado);
      }
    }catch(error){
      console.log('Error', error);

    }
  }

  private redireccionDeUsuario(verificado:boolean): void{
    if(verificado){
      this.router.navigateByUrl('/tabs/home');  
    }else{
      this.router.navigateByUrl('/tab/sesion');

    }

  }

}
