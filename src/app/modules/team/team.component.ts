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
      image: '/assets/img/team/team-madi.png',
      name: 'Madi Sayeed',
      rol: 'Co-Founder',
    },
    {
      image: '/assets/img/team/team.png',
      name: ' Placeholder Madi´s team',
      rol: 'CO-FOUNDER',
    },
    {
      image: '/assets/img/team/team-francisco.png',
      name: ' Francisco Michelich',
      rol: 'General Manager (COO)',
    },
    {
      image: '/assets/img/team/team-juan.png',
      name: 'Juan Bidondo',
      rol: 'Project Lead',
    },
    {
      image: '/assets/img/team/team-matias.png',
      name: 'Matias Camiletti',
      rol: 'Lead Blockchain Developer',
    },
    {
      image: '/assets/img/team/team-alejandro.png',
      name: 'Alejandro Romero',
      rol: 'Lead Developer',
    },
    {
      image: '/assets/img/team/team-axel.png',
      name: 'Axel Camiletti',
      rol: 'UX/UI Art Director',
    },
    {
      image: '/assets/img/team/team-rosario.png',
      name: 'Rosario Cainzo',
      rol: 'UX/UI Designer',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
