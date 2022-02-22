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
  mouse_x = 0;
  mouse_y = 0;
  count = 0;

  @ViewChild('cursor') cursor:any;
  @ViewChild('modelPlanet') modelPlanet: any;
  @ViewChild('backgroundStars') backgroundStars: any;

  constructor(
    protected navigator: Router,
    public el: ElementRef<HTMLElement>,
    protected mainService: MainService,
    ) { }

  ngOnInit(): void {
  }


  /* @HostListener('mouseover', ['$event']) mouseover(event:any){
    console.log('mouseover' +event);
  } */

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    console.log('Mouse move' + event.pageX);
    this.cursor.nativeElement.style.left = event.pageX + 'px';
    this.cursor.nativeElement.style.top = event.pageY + 'px';
    this.mouse_x = -10 + (event.pageX / 100);
    this.mouse_y = 80 + (event.pageY / 100);
    this.modelPlanet.nativeElement.cameraOrbit = this.mouse_x + 'deg' + this.mouse_y + 'deg' + '20m';
    this.backgroundStars.nativeElement.style.transform = 'scale(' + this.mouse_y / 50 + ')';
  }

  /* @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.gradientLeft = event.pageX - this.el.nativeElement.offsetLeft;
    this.gradientTop = event.pageY - this.el.nativeElement.offsetTop;
  } */

  moveElements(){
    console.log('asd');
  }

  startAnimation(){
    this.startZoom = true;
    this.endAnimationHeadline = true;
    this.mainService.audioMain.next(true);
    this.endAnimationMic = true;
    this.modelPlanet.nativeElement.cameraOrbit = '10deg 80deg 20m';
    setTimeout(() => {
      this.startVideo = true;
    }, 2000);
    setTimeout(() => {
      this.startEndScene = true;
    }, 11400);
    setTimeout(() => {
      this.navigator.navigateByUrl('/start');
    }, 11700);
  }



}
