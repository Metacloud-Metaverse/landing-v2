import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { VideoManagerService } from 'src/app/services/video-manager.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    trigger('leaveElements', [
      transition(':leave', [
        animate('700ms ease', style({ opacity: 0, filter: 'blur(30px)' }))
      ]),
    ]),
  ]
})
export class MainLayoutComponent implements OnInit {

  isVideoOpen = false;
  videoUrlIframe?: SafeResourceUrl;

  isMenuOpen = false;
  isMuted = true;
  scrolled: boolean = false;
  showMobile: boolean = true;
  @ViewChild('audio') audio!: ElementRef;

  constructor(
    protected videoManager: VideoManagerService,
    protected sanitizer: DomSanitizer,

    public dialog: MatDialog,
    public router: Router,
    protected mainService: MainService,
    private breakpointObserver: BreakpointObserver,
  ) { }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  ngOnInit(): void {
    this.loadVideoManageer();
    this.loadMusic();
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showMobile = false;
        }
    });
  }

  playAudio() {
    this.isMuted = false;
    setTimeout(() => { this.audio.nativeElement.volume = 0.0; }, 100);
    this.audio.nativeElement.play();
    setTimeout(() => { this.audio.nativeElement.volume = 0.07; }, 250);
    setTimeout(() => { this.audio.nativeElement.volume = 0.15; }, 500);
    setTimeout(() => { this.audio.nativeElement.volume = 0.23; }, 750);
    setTimeout(() => { this.audio.nativeElement.volume = 0.30; }, 1000);
  }

  stopAudio() {
    this.audio.nativeElement.pause();
    this.isMuted = true;
  }

  closeMenu(e: any){
    this.isMenuOpen = false;
  }

  loadMusic(){
    this.mainService.audioMain.subscribe(res=>{
      if(res){
        this.playAudio();
      } else {
        this.stopAudio();
      }
    });
  }

  loadVideoManageer() {
    this.videoManager.startVideo.subscribe(urlIframe => {
      this.videoUrlIframe = this.sanitizer.bypassSecurityTrustResourceUrl(urlIframe);
      this.isVideoOpen = true;
    });
  }

  onClickPlayHypeVideo() {
    this.videoManager.startVideo.next('https://www.youtube.com/embed/h1-0NZAqz4o');
  }

  closeVideo() {
    this.isVideoOpen = false;
  }
}
