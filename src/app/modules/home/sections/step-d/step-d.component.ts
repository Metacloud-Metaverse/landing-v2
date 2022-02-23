import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-d',
  templateUrl: './step-d.component.html',
  styleUrls: ['./step-d.component.scss'],
  animations: [
    trigger('leaveElements', [
      transition(':leave', [
        animate('700ms ease', style({ opacity: 0, filter: 'blur(30px)' }))
      ]),
    ]),
  ]
})
export class StepDComponent implements OnInit {

  section3text2 = true;
  section3text3 = true;

  sectionActive = 0;

  constructor() { }

  @HostListener('mouseover', ['$event']) onMouseOverGames(event: any) {
    this.activeGames();
  }

  @HostListener('mouseover', ['$event']) onMouseOverMusic(event: any) {
    this.activeMusic();
  }

  @HostListener('mouseover', ['$event']) onMouseOverCreativity(event: any) {
    this.activeCreativity();
  }

  ngOnInit(): void {
  }

  activeGames(){
    this.sectionActive = 1;
    /* this.modelAvatarPrimary.nativeElement.animationName = 'dancing'; */
  }

  activeMusic(){
    this.sectionActive = 2;
    /* this.modelAvatarPrimary.nativeElement.animationName = 'dancing'; */
  }

  activeCreativity(){
    this.sectionActive = 3;
    /* this.modelAvatarPrimary.nativeElement.animationName = 'dancing'; */
  }
}
