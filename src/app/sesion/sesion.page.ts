import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';
import { RegistrarsePage } from '../registrarse/registrarse.page';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { empty, EmptyError } from 'rxjs';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  constructor(public alertController: AlertController, private router:Router, public popoverController:PopoverController,private storage:Storage, private authSvc:AuthService) {
    this.storage.get('temaOscuro').then((result)=>{
      if(result=== true){
        document.body.setAttribute('color-theme','dark');
         
      }
      else{
        document.body.setAttribute('color-theme','light');
        
      }
    });
   
      
     
   }

  /* async campos_vacios() {
     const user = document.getElementById('user')
     const clave = document.getElementById('clave')
     if(user clave.empty){
      const alert = await this.alertController.create({
        cssClass: 'Importante',
        header: 'AVISO',
        message: 'Ingresa usuario y contraseña para ingresar',
        buttons: ['OK']
      });
     }
   }*/
   async alert() {
    const alert = await this.alertController.create({
      cssClass: 'Importante',
      header: 'IMPORTANTE',
      subHeader: 'Confirmacíon de usuario',
      message: 'Al correo te enviamos un mensaje para poder iniciar sesión. \n Recuerdo activar lo primero',
      buttons: ['OK']
    });

    await alert.present();
  }

  async abrirPopover(ev: any ){
    this.alert()
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
