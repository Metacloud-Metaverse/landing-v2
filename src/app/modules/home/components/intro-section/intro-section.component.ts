import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent implements OnInit {

  clickToStart = false;
  introVideo = false;
  backgroundStarsAnimation = false;
  activeBlink = false;

  @ViewChild('video') video!: ElementRef;

  constructor(private renderer:Renderer2){}


  ngOnInit(): void {
  }

  onMouseMove(event:any) {
    let rotatex = -(window.screen.width / 2 - event.screenX) / 150;
    let rotatey = (window.screen.height / 2 - event.screenY) / 40;
    let translatex = -(window.screen.width / 2 - event.screenX) / 26;
    let translatey = (window.screen.height / 2 - event.screenY) / 7;
    /* let zoom = (window.screen.width / 2 - event.screenX) - (window.screen.height / 2 - event.screenY) / 10; */
    /* this.renderer.setStyle(this.video.nativeElement,'transform',`rotateY(${rotatex}deg) rotateX(${rotatey}deg) translate(${translatex}px) translate(${translatey}px)`); */
    this.renderer.setStyle(this.video.nativeElement,'transform',`rotateY(${rotatex}deg) rotateX(${rotatey}deg) translateX(${translatex}px) translateY(${translatey}px)`);
  }

  introAnimation(){
    this.backgroundStarsAnimation = true;
  }
}
