import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from 'src/app/services/main.service';

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
    protected location: Location,
    protected mainService: MainService,
    protected navigator: Router,
  ) { }

  ngOnInit(): void {
  }

  sendCloseMenu() {
    this.closeMenu.emit();
    this.isMenuOpen = false;
  }

  routeWithEffect(path: string) {
    if(this.location.path() == path && path == '/home'){
      this.sendCloseMenu();
      this.mainService.homeRefresh.next(true);
      return;
    }

    this.blinkEffect();

    setTimeout(() => {
      this.sendCloseMenu();
      this.navigator.navigate([path]);
    }, 800);
  }

  blinkEffect(){
    this.activeBlink = true;
    setTimeout(() => {
      this.activeBlink = false;
    }, 2000);
  }

}
