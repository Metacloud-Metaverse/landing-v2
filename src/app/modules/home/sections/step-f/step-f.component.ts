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
    '/assets/hdr/concert-optimized.jpg',
    '/assets/hdr/bonfire-optimized.jpg',
    '/assets/hdr/nieve-optimized.jpg',
    '/assets/hdr/casino-optimized.jpg',
    '/assets/hdr/museo-optimized.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showChangeSceneButton = true;
    }, 10000);
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
