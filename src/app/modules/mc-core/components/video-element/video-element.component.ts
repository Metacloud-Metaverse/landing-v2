import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.scss']
})
export class VideoElementComponent implements OnInit {

  isVideoOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
