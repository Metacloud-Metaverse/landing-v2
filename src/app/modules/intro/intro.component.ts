import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  startVideo = false;
  endAnimationHeadline = false;
  endAnimationMic = false;
  startZoom = false;
  startLines = true;
  startEndScene = false;

  @ViewChild('cursor') cursor:any;

  constructor(
    protected navigator: Router,
    public el: ElementRef<HTMLElement>,
    protected mainService: MainService,
    ) { }

  ngOnInit(): void {
  }


  startAnimation(){
    this.endAnimationHeadline = true;
    this.mainService.audioMain.next(true);
    this.endAnimationMic = true;
    setTimeout(() => {
      this.startVideo = true;
    }, 1600);
    setTimeout(() => {
      this.startEndScene = true;
    }, 11400);
    setTimeout(() => {
      this.navigator.navigateByUrl('/start');
    }, 11700);
  }


  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursor.nativeElement.style.left = event.pageX + 'px';
    this.cursor.nativeElement.style.top = event.pageY + 'px';
    this.cursor.nativeElement.style.cursor.none;
  }

}
