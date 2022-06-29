import { Component, OnInit } from '@angular/core';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';

@Component({
  selector: 'app-concert-page',
  templateUrl: './concert-page.component.html',
  styleUrls: ['./concert-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class ConcertPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
