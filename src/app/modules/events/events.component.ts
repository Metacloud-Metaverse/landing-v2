import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
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
      title: 'Concerts',
      description: 'Techno, hip-hop, edm, rock shows, rap, country, blues, jazz, reggae and more.',
      url: 'concerts',
    },
    {
      image: '/assets/img/event-art.png',
      title: 'Art & Theaters',
      description: 'Attend Live NFT galleries, standup comedy, improv and theatricals',
      url: 'event-details',
    },
    {
      image: '/assets/img/event-podcast.png',
      title: 'Podcasts',
      description: 'Listen to your favorite podcast',
      url: 'event-details',
    },
    {
      image: '/assets/img/event-casino.png',
      title: 'Casino & Tournaments',
      description: 'Play Texas hold-em poker, live sports betting, blackjack, slots and tournaments',
      url: 'event-details',
    },
    {
      image: '/assets/img/event-games.png',
      title: 'Games',
      description: 'Play chess, bingo, puzzles, trivia, sudoku and more',
      url: 'event-details',
    },
  ]

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Events | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Enjoy live concerts, venues, games and more with friends in the Metaverse!' }
    );
  }

}
