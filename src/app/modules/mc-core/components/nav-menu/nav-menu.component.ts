import { Component, Input, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  animations: [
    trigger('componentAnimation',[
      transition('void => *', [
        query('.component-animation', style({ transform: 'translateY(100px)', opacity: 0 })),
        query('.component-animation' ,
        stagger('150ms', [
          animate('600ms ease', style({ transform: 'translateY(0)', opacity: 1 }))
        ]))
      ])
    ]),
    trigger('closeMenu',[
      transition ('* => void',[
        animate('500ms ease', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NavMenuComponent implements OnInit {

  @Input() isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
