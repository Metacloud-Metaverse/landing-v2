import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),

      transition('inactive <=> active', animate('500ms ease-in')),
      transition('active <=> inactive', animate('500ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  clickToStart = false;
  activeBlink = false;
  activeAnimation = 'inactive';


  constructor() { }

  ngOnInit(): void {
  }

}
