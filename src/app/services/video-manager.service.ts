import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoManagerService {

  startVideo = new Subject<string>();

  constructor() { }
}
