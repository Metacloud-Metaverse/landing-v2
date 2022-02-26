import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  isLoading = true;
  isLoadingPlanet = true;
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
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Welcome to the metacloud metaverse | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Escape to a new reality with metacloud.' }
    );
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.isLoadingPlanet = false;
    }, 1500);
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
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
    if (this.startZoom == false) {
      this.modelPlanet.nativeElement.cameraOrbit = this.mouse_x + 'deg' + this.mouse_y + 'deg' + '10m';
    }
    this.backgroundStars.nativeElement.style.top = (2 * event.pageY) / 20 + 'px';
    this.backgroundStars.nativeElement.style.left = (2 * event.pageX) / 20 + 'px';
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
    this.modelPlanet.nativeElement.cameraOrbit = '40deg 80deg 3m';
    setTimeout(() => {
      this.modelPlanet.nativeElement.cameraOrbit = '60deg 70deg 2m';
    }, 700);
    setTimeout(() => {
      this.startVideo = true;
    }, 1700);
    setTimeout(() => {
      this.startEndScene = true;
    }, 11400);
    setTimeout(() => {
      this.navigator.navigateByUrl('/home');
    }, 12000);
  }
}
