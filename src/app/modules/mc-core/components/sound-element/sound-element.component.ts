import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-sound-element',
  templateUrl: './sound-element.component.html',
  styleUrls: ['./sound-element.component.scss']
})
export class SoundElementComponent implements OnInit {

  isMuted = true;
  @ViewChild('audio') audio!: ElementRef;

  constructor(
    protected mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.loadMusic();
  }

  loadMusic(){
    this.mainService.audioMain.subscribe(res=>{
      this.playAudio();
    });
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
}
