import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../../modals/video-modal/video-modal.component';
import { MenuModalComponent } from '../../modals/menu-modal/menu-modal.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openVideoModal() {
    this.dialog.open(VideoModalComponent, {
      data: {
        width: '500',
        panelclass: 'video-modal'
      },
    });
  }

  menuModal() {
    this.dialog.open(MenuModalComponent, {
      data: {
        width: '500',
        panelclass: 'menu-modal'
      },
    });
  }
}
