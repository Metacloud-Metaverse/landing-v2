import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

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

  activeBlink = false;
  timedOutCloser!:any;
  @Input() isMenuOpen = false;
  @Output() closeMenu = new EventEmitter<boolean>();

  trigger:any;

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  sendCloseMenu() {
    this.closeMenu.emit();
    this.isMenuOpen = false;
  }

  routeHome(){
    this.blinkEffect();

    setTimeout(() => {
      this.sendCloseMenu();
      this.router.navigate(['/start']);
    }, 800);
  }

  routeTeam(){
    this.blinkEffect();

    setTimeout(() => {
      this.sendCloseMenu();
      this.router.navigate(['/team']);
    }, 800);
  }

  routeEvents(){
    this.blinkEffect();

    setTimeout(() => {
      this.sendCloseMenu();
      this.router.navigate(['/events']);
    }, 800);
  }

  routeContact(){
    this.blinkEffect();

    setTimeout(() => {
      this.sendCloseMenu();
      this.router.navigate(['/contact']);
    }, 800);
  }

  routeTerms(){
    this.blinkEffect();

    setTimeout(() => {
      this.sendCloseMenu();
      this.router.navigate(['/legals/terms-of-service']);
    }, 800);
  }

  routePrivacy(){
    this.blinkEffect();

    setTimeout(() => {
      this.sendCloseMenu();
      this.router.navigate(['/legals/privacy-policy']);
    }, 800);
  }

  blinkEffect(){
    this.activeBlink = true;
    setTimeout(() => {
      this.activeBlink = false;
    }, 2000);
  }

}
