import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  audioMain = new Subject<boolean>();
  homeRefresh = new Subject<boolean>();

  constructor(
    protected http: HttpClient
  ) { }

  sendContact(contact: any): Observable<any> {
    return this.http.post('https://us-central1-daring-pilot-342219.cloudfunctions.net/sendContact', contact);
  }
}
