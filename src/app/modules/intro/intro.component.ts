import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @ViewChild('cursor') cursor:any;
  @ViewChild('modelPlanet') modelPlanet: any;
  @ViewChild('backgroundStars') backgroundStars: any;
  @ViewChild('videoIntro') videoIntro?: ElementRef<HTMLVideoElement>;

  startVideo = false;
  startZoom = false;
  startEndScene = false;
  isLoadingPlanet = true;
  isMuted = true;
  mouse_x = 0;
  mouse_y = 0;

  isLoadingVideo = true;
  videoBlobSrc: any;
  isIosPlatform = false;

  constructor(
    protected sanitizer: DomSanitizer,
    protected platform: Platform,

    protected navigator: Router,
    public el: ElementRef<HTMLElement>,
    protected mainService: MainService,
    private titleService: Title,
    private metaTagService: Meta,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Welcome to the metacloud metaverse | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Escape to a new reality with metacloud.' }
    );
  }

  ngAfterViewInit(){
    this.loadPlanet();
    this.preloadVideo();
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    /* console.log('Mouse move' + event.pageX); */
    this.cursor.nativeElement.style.left = event.pageX + 'px';
    this.cursor.nativeElement.style.top = event.pageY + 'px';
    this.mouse_x = -10 + (event.pageX / 100);
    this.mouse_y = 80 + (event.pageY / 100);
    if (this.startZoom == false) {
      this.modelPlanet.nativeElement.cameraOrbit = this.mouse_x + 'deg' + this.mouse_y + 'deg' + '10m';
    }
    this.backgroundStars.nativeElement.style.top = (2 * event.pageY) / 20 + 'px';
    this.backgroundStars.nativeElement.style.left = (2 * event.pageX) / 20 + 'px';

    this.breakpointObserver
      .observe([Breakpoints.Small])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.cursor.nativeElement.style.left = 50 + '%';
          this.cursor.nativeElement.style.top = 50 + '%';
        }
    });
  }

  loadPlanet(){
    /* this.modelPlanet.nativeElement.addEventListener('load', (event: any) => {
      this.isLoadingPlanet = false;
      console.log('Loaded');
      console.log(this.modelPlanet);
    }, true); */
    this.modelPlanet.nativeElement.addEventListener('model-visibility', (event: any) => {
        this.isLoadingPlanet = false;
    }, true);
  }

  preloadVideo() {
    if(this.platform.IOS){
      fetch('/assets/videos/intro-hype-video-muted-optimized.gif').then();
      this.isIosPlatform = true;
      return;
    }

    fetch('/assets/videos/intro-hype-video-muted.mp4')
    .then(res => {
      res.blob().then(data => {
        this.videoBlobSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(data));
      });
    });
  }

  startAnimation(){
    this.startZoom = true;
    this.mainService.audioMain.next(true);
    this.modelPlanet.nativeElement.cameraOrbit = '40deg 80deg 3m';
    setTimeout(() => {
      this.modelPlanet.nativeElement.cameraOrbit = '60deg 70deg 2m';
    }, 700);
    setTimeout(() => {
      this.startVideo = true;

      if(!this.isIosPlatform){
        setTimeout(() => {
          this.videoIntro?.nativeElement.play();
        }, 70);
      }      

    }, 1700);
    setTimeout(() => {
      this.startEndScene = true;
    }, 11400);
    setTimeout(() => {
      this.navigator.navigateByUrl('/home');
    }, 12000);
  }
}
