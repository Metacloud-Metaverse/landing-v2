import { Component, OnInit, OnDestroy, Injectable } from "@angular/core";
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: 'app-step-a',
  templateUrl: './step-a.component.html',
  styleUrls: ['./step-a.component.scss']
})
export class StepAComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
  }

}
