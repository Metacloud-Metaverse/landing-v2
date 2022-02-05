import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  audioMain = new Subject<boolean>();

  constructor() { }
}
