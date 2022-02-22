import { Component, OnInit } from '@angular/core';
import { ComponentAnimation } from '../mc-core/animations/component.animation';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class EventsComponent implements OnInit {

  events:any = [
    {
      image: '/assets/img/event-concert.png',
      title: 'Concert',
      description: 'Edm, country, blues, jazz, raves, rock shows, rap, reggae and more',
    },
    {
      image: '/assets/img/event-art.png',
      title: 'Art & Theaters',
      description: 'Attend Live NFT galleries, standup comedy, improv and theatricals',
    },
    {
      image: '/assets/img/event-podcast.png',
      title: 'Podcast',
      description: 'Listen to your favorite podcast',
    },
    {
      image: '/assets/img/event-casino.png',
      title: 'Casino & Tournament',
      description: 'Play Texas hold-em poker, live sports betting, blackjack, slots and tournaments',
    },
    {
      image: '/assets/img/event-games.png',
      name: 'Games',
      description: 'Play chess, bingo, puzzles, trivia, sudoku and more',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
