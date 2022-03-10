import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-this-is-useful-component',
  templateUrl: './this-is-useful-component.component.html',
  styleUrls: ['./this-is-useful-component.component.scss']
})
export class ThisIsUsefulComponentComponent implements OnInit {

  isVoted = false;
  /* isYes = false;
  isNo = false; */

  constructor() { }

  ngOnInit(): void {
  }

  onVoteButton(){
    this.isVoted = true;
  }

  /* onClickYesButton(){
    this.isNo = false;
    if (this.isYes == true){
      this.isYes = false;
    } else{
      this.isYes = true;
    }
  }

  onClickNoButton(){
    this.isYes = false;
    if (this.isNo == true){
      this.isNo = false;
    } else{
      this.isNo = true;
    }
  } */

}
