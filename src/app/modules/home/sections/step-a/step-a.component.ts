import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-step-a',
  templateUrl: './step-a.component.html',
  styleUrls: ['./step-a.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('paragraphAnimation', [
      transition(':leave', [
        animate('700ms ease', style({ opacity: 0, transform: 'translateY(-200px)', filter: 'blur(30px)' }))
      ]),
    ]),
  ]
})
export class StepAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
