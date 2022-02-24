import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-f',
  templateUrl: './step-f.component.html',
  styleUrls: ['./step-f.component.scss']
})
export class StepFComponent implements OnInit, AfterViewInit {

  @Output() changeScene = new EventEmitter<string>();
  @Input() showChangeSceneButton = true;

  currentScene = 0;

  assets = [
    '/assets/hdr/concertHDRI.jpg',
    '/assets/hdr/bonfireHDRI.jpg',
    '/assets/hdr/nieveHDRI.jpg',
    '/assets/hdr/casinoHDRI.jpg',
    '/assets/hdr/museoHDRI.jpg'
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
