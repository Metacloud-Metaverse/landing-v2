import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-speed-element',
  templateUrl: './line-speed-element.component.html',
  styleUrls: ['./line-speed-element.component.scss']
})
export class LineSpeedElementComponent implements OnInit {

  @Input() startAnimation = false;

  constructor() { }

  ngOnInit(): void {
  }

}
