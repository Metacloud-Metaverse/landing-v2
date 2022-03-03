import { Component, Input, OnInit } from '@angular/core';
import { VideoManagerService } from 'src/app/services/video-manager.service';

@Component({
  selector: 'app-video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.scss']
})
export class VideoElementComponent implements OnInit {

  @Input() title!: string;
  @Input() miniature!: string;
  @Input() url!: string;

  constructor(
    protected videoManager: VideoManagerService
  ) { }

  ngOnInit(): void {
  }

  onClickPlay() {
    this.videoManager.startVideo.next(this.url);
  }
}
