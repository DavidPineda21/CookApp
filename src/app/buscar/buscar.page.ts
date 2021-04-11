import { Component, OnInit } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import {Storage} from '@ionic/storage';
import * as yt from 'ionic-youtube-streams';
import * as youtube from 'ionic-youtube-search';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage {

  videos=[];
  searchModel = '';

  constructor( private storage:Storage, private readonly streamingMedia:StreamingMedia) {
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

  async search(){
    this.videos=await youtube.search(this.searchModel);
  }

  async streamVideo(videoId:string){
    const info:any= await yt.info(videoId);
    this.streamURL(info.formats[0].url);
  }

  private streamURL(url: any) {
    const options: StreamingVideoOptions={
      successCallback: ()=>{

      },
      errorCallback:(e)=>{
        console.log('Error streaming');
      },

      orientation: 'portrait',
      shouldAutoClose:true,
      controls: true
    };

    this.streamingMedia.playVideo(url, options);
  }

}
