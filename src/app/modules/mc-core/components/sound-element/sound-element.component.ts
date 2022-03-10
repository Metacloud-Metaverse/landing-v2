import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-sound-element',
  templateUrl: './sound-element.component.html',
  styleUrls: ['./sound-element.component.scss']
})
export class SoundElementComponent implements OnInit {

  isMuted = true;

  constructor(
    protected mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.loadMusicConfig();
  }

  loadMusicConfig() {
    this.mainService.audioMain.subscribe(res => this.isMuted = !res);
  }

  toogleAudio() {
    if(this.isMuted){
      this.mainService.audioMain.next(true);
    } else {
      this.mainService.audioMain.next(false);
    }
  }
}
