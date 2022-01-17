import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss'],
  animations: [
    trigger('componentAnimation',[
      transition('void => *', [
        query('.component-animation', style({ transform: 'translateY(100px)', opacity: 0 })),
        query('.component-animation' ,
        stagger('150ms', [
          animate('800ms ease', style({ transform: 'translateY(0)', opacity: 1 }))
        ]))
      ])
    ])
  ]
})
export class MenuModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
