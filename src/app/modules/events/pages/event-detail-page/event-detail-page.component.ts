import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.scss']
})
export class EventDetailPageComponent implements OnInit {

  @ViewChild('carousel', {read: DragScrollComponent}) ds!: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
