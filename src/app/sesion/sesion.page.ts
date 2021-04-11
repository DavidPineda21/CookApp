import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';
import { RegistrarsePage } from '../registrarse/registrarse.page';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  constructor(private router:Router, public popoverController:PopoverController,private storage:Storage, private authSvc:AuthService) {
    this.storage.get('temaOscuro').then((result)=>{
      if(result=== true){
        document.body.setAttribute('color-theme','dark');
         
      }
      else{
        document.body.setAttribute('color-theme','light');
        
      }
    });
   
      
     
   }

  async abrirPopover(ev: any ){
    const popover = await this.popoverController.create({
      component: RegistrarsePage,
      cssClass: 'pepe',
      event: ev,
      translucent: true,
      mode:'ios'
    });


    return await popover.present();

  }

  ngOnInit() {
  }

  async sesion(email,password){
    this.storage.set('sesioniniciada',true);
     
    try{
      const user= await this.authSvc.login(email.value, password.value);
      if(user){
        const verificado= this.authSvc.estaEmailVerificado(user);
        this.redireccionDeUsuario(verificado);
      }
    }catch(error){
      console.log('Error', error);

    }

   }

   async Google(){
    this.storage.set('sesioniniciada',true);
    try{
      const user= await this.authSvc.loginGoogle();
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
