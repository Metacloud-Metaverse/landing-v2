import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-f',
  templateUrl: './step-f.component.html',
  styleUrls: ['./step-f.component.scss']
})
export class StepFComponent implements OnInit {

  @Output() changeScene = new EventEmitter<string>();

  currentScene = 0;
  maxScene = 5;

  assets = [
    '/assets/hdr/concertHDRI.hdr',
    '/assets/hdr/bonfireHDRI.hdr',
    '/assets/hdr/nieveHDRI.hdr',
    '/assets/hdr/casinoHDRI.hdr',
    '/assets/hdr/museoHDRI.hdr'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getSceneAsset(): string {
    return this.assets[this.currentScene];
  }

  onClickChange() {
    this.currentScene++;
    if(this.currentScene >= (this.maxScene-1)){
      this.currentScene = 0;
    }
    this.changeScene.emit(this.getSceneAsset());
  }
}
