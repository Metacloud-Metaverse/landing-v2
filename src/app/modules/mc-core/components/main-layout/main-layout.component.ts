import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../../modals/video-modal/video-modal.component';
import { MenuModalComponent } from '../../modals/menu-modal/menu-modal.component';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isVideoOpen = false;
  isMenuOpen = false;
  isMuted = true;
  @ViewChild('audio') audio!: ElementRef;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    protected mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.loadMusic();
  }

  playAudio() {
    if (this.isMuted == true) {
      this.isMuted = false;
      setTimeout(() => { this.audio.nativeElement.volume = 0.0; }, 100);
      this.audio.nativeElement.play();
      setTimeout(() => { this.audio.nativeElement.volume = 0.07; }, 250);
      setTimeout(() => { this.audio.nativeElement.volume = 0.15; }, 500);
      setTimeout(() => { this.audio.nativeElement.volume = 0.23; }, 750);
      setTimeout(() => { this.audio.nativeElement.volume = 0.30; }, 1000);
    } else{
      this.audio.nativeElement.pause();
      this.isMuted = true;
    }
  }

  openVideoModal() {
    this.dialog.open(VideoModalComponent, {
      panelClass: 'video-modal-container'
    });
  }

  menuModal() {
    if (this.isMenuOpen == false) {
      this.dialog.open(MenuModalComponent, {
        panelClass: 'menu-modal-container'
      });
      this.isMenuOpen = true;
    } else {
      this.isMenuOpen = false;
      this.dialog.closeAll();
    }
  }

  loadMusic(){
    this.mainService.audioMain.subscribe(res=>{
      this.playAudio();
    });
  }
}
