import { Component, OnInit } from '@angular/core';
import { ComponentAnimation } from '../mc-core/animations/component.animation';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class TeamComponent implements OnInit {

  team:any = [
    {
      image: '/assets/img/team1.png',
      name: 'Stefan Sagmeister',
      rol: 'CEO',
    },
    {
      image: '/assets/img/team2.png',
      name: 'Flower Girl',
      rol: 'ARTIST',
    },
    {
      image: '/assets/img/team3.png',
      name: 'Flower Girl',
      rol: 'CTO',
    },
    {
      image: '/assets/img/team1.png',
      name: 'Stefan Sagmeister',
      rol: 'CEO',
    },
    {
      image: '/assets/img/team2.png',
      name: 'Flower Girl',
      rol: 'ARTIST',
    },
    {
      image: '/assets/img/team3.png',
      name: 'Flower Girl',
      rol: 'CTO',
    },
    {
      image: '/assets/img/team1.png',
      name: 'Stefan Sagmeister',
      rol: 'CEO',
    },
    {
      image: '/assets/img/team2.png',
      name: 'Flower Girl',
      rol: 'ARTIST',
    },
    {
      image: '/assets/img/team3.png',
      name: 'Flower Girl',
      rol: 'CTO',
    },
    {
      image: '/assets/img/team1.png',
      name: 'Stefan Sagmeister',
      rol: 'CEO',
    },
    {
      image: '/assets/img/team2.png',
      name: 'Flower Girl',
      rol: 'ARTIST',
    },
    {
      image: '/assets/img/team3.png',
      name: 'Flower Girl',
      rol: 'CTO',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
