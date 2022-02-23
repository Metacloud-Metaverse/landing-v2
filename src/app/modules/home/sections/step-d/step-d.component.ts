import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-d',
  templateUrl: './step-d.component.html',
  styleUrls: ['./step-d.component.scss'],
  animations: [
    trigger('paragraphAnimation', [
      transition(':leave', [
        animate('700ms ease', style({ opacity: 0, transform: 'translateY(-200px)', filter: 'blur(30px)' }))
      ]),
    ]),
  ]
})
export class StepDComponent implements OnInit {

  section3text2 = false;
  section3text3 = false;

  constructor() { }

  ngOnInit(): void {
  }

  activeMusic(){
    /* this.modelAvatarPrimary.nativeElement.animationName = 'dancing'; */
  }
}