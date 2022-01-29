import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../../modals/video-modal/video-modal.component';
import { MenuModalComponent } from '../../modals/menu-modal/menu-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isVideoOpen = false;
  isMenuOpen = false;
  isMuted = false;
  @ViewChild('audio') audio!: ElementRef;


  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  playAudio() {
    if (this.isMuted == true) {
      this.audio.nativeElement.play();
      this.isMuted = false;
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
}
