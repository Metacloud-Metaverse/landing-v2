import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-c',
  templateUrl: './step-c.component.html',
  styleUrls: ['./step-c.component.scss']
})
export class StepCComponent implements OnInit {

  events:any = [
    {
      image: '/assets/img/event-concert.png',
      title: 'Concerts',
      description: 'Techno, hip-hop, edm, rock shows, rap, country, blues, jazz, reggae and more.',
    },
    {
      image: '/assets/img/event-art.png',
      title: 'Art & Theaters',
      description: 'Attend Live NFT galleries, standup comedy, improv and theatricals',
    },
    {
      image: '/assets/img/event-podcast.png',
      title: 'Podcasts',
      description: 'Listen to your favorite podcast',
    },
    {
      image: '/assets/img/event-casino.png',
      title: 'Casino & Tournaments',
      description: 'Play Texas hold-em poker, live sports betting, blackjack, slots and tournaments',
    },
    {
      image: '/assets/img/event-games.png',
      title: 'Games',
      description: 'Play chess, bingo, puzzles, trivia, sudoku and more',
    },
  ];

  // Touch
  touchY = 0;
  touchX = 0;

  constructor() { }

  ngOnInit(): void {
  }

  mouseWheelConfig(event: any) {
    if(Math.abs(event.deltaY) <= 3){
      event.stopPropagation();
    }
  }

  touchStartConfig(event: any) {
    this.touchY = event.touches[0].clientY;
    this.touchX = event.touches[0].clientX;
  }

  touchEndConfig(event: any) {
    let tx = event.changedTouches[0].clientX;
    let dif = Math.abs(this.touchX - tx);
    if(dif > 8){
      event.stopPropagation();
    }
  }
  
}
