import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sliders =[
    {
      img: 'assets/slide-1.svg',
      titulo:'<br>'
    },
    {
      img: 'assets/slide-2.svg',
      titulo:'<br>'
    },
    {
      img: 'assets/slide-3.svg',
      titulo:'<br>'
    }
  ];

}
