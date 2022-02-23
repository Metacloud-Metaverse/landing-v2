import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-f',
  templateUrl: './step-f.component.html',
  styleUrls: ['./step-f.component.scss']
})
export class StepFComponent implements OnInit, AfterViewInit {

  @Output() changeScene = new EventEmitter<string>();
  @Input() showChangeSceneButton = false;

  currentScene = 0;

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

  ngAfterViewInit(): void {
    this.onClickChange();
  }

  onClickChange() {
    this.changeScene.emit(this.getSceneAsset());

    this.currentScene++;
    if(this.currentScene >= (this.assets.length-1)){
      this.currentScene = 0;
    }
  }

  getSceneAsset(): string {
    return this.assets[this.currentScene];
  }

}
