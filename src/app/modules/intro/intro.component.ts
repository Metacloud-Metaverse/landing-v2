import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  startVideo = false;
  startZoom = false;
  startLines = false;
  startEndScene = false;

  @ViewChild('cursor') cursor:any;

  constructor(
    protected navigator: Router,
    public el: ElementRef<HTMLElement>,
    ) { }

  ngOnInit(): void {
  }

  startAnimation(){
    this.startLines = true;
    setTimeout(() => {
      this.startZoom = true;
    }, 400);
    setTimeout(() => {
      this.startVideo = true;
    }, 500);
    setTimeout(() => {
      this.startLines = false;
    }, 1000);
    setTimeout(() => {
      this.startEndScene = true;
    }, 10400);
    setTimeout(() => {
      this.navigator.navigateByUrl('/start');
    }, 10700);
  }


  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursor.nativeElement.style.left = event.pageX + 'px';
    this.cursor.nativeElement.style.top = event.pageY + 'px';
    this.cursor.nativeElement.style.cursor.none;
  }

}
