import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-k',
  templateUrl: './step-k.component.html',
  styleUrls: ['./step-k.component.scss']
})
export class StepKComponent implements OnInit {

  logos:any = [
    /* { title: 'Hacken', img: 'logo-hacken.png' }, */
    { title: 'Coming Soon', img: 'logo-comingsoon.png' },
    { title: 'Coming Soon', img: 'logo-comingsoon.png' },
    { title: 'Netvrk', img: 'logo-netvrk.png' },
    { title: 'Coming Soon', img: 'logo-comingsoon.png' },
    { title: 'Coming Soon', img: 'logo-comingsoon.png' },
    { title: 'Coming Soon', img: 'logo-comingsoon.png' },
    { title: 'Dextools', img: 'logo-dextools.png' },
    { title: 'Icodrops', img: 'logo-icodrops.png' },
    { title: 'Coda', img: 'logo-coda.png' },
    { title: '0xJunior', img: 'logo-0xjunior.png' },
    { title: 'Binance Smart Chain', img: 'logo-binancesmartchain.png' },
    { title: 'Wolfe', img: 'logo-wolfe.png' },
    { title: 'Metawise', img: 'logo-metawise.png' },
    { title: 'SafeGram', img: 'logo-safegram.png' },
    { title: 'Velox', img: 'logo-velox.png' },
    { title: 'Coming Soon', img: 'logo-comingsoon.png' },
    { title: 'Wall Street Hunters', img: 'logo-wallstreethunters.png' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
