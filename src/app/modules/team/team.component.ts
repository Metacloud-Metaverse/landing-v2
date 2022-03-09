import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
      image: '/assets/img/team/team-madi-3d.png',
      name: 'Madi Sayeed',
      rol: 'Co-Founder',
      linkedin: 'http://www.linkedin.com/in/madis2022',
      twitter: 'http://www.twitter.com/womenwhocrypt0'
    },
    {
      image: '/assets/img/team/team-sam-3d.png',
      name: ' Samuel Sullivan',
      rol: 'CO-FOUNDER',
      linkedin: 'https://www.linkedin.com/in/samuel-sullivan-5452b3223',
      twitter: ''
    },
    {
      image: '/assets/img/team/team-francisco-3d.png',
      name: ' Francisco Michelich',
      rol: 'General Manager (COO)',
      linkedin: 'https://www.linkedin.com/in/franciscomichelich/',
      twitter: 'https://twitter.com/ing_fmichelich'
    },
    {
      image: '/assets/img/team/team-juan-3d.png',
      name: 'Juan Bidondo',
      rol: 'Project Lead',
      linkedin: 'https://www.linkedin.com/in/bidondojuan/?originalSubdomain=ar',
      twitter: ''
    },
    {
      image: '/assets/img/team/team-matias-3d.png',
      name: 'Matias Camiletti',
      rol: 'Lead Blockchain Developer',
      linkedin: '',
      twitter: 'https://twitter.com/matiascamiletti'
    },
    {
      image: '/assets/img/team/team-alejandro-3d.png',
      name: 'Alejandro Romero',
      rol: 'Lead Developer',
      linkedin: '',
      twitter: ''
    },
    {
      image: '/assets/img/team/team-axel-3d.png',
      name: 'Axel Camiletti',
      rol: 'UX/UI Art Director',
      linkedin: '',
      twitter: ''
    },
    {
      image: '/assets/img/team/team-rosario-3d.png',
      name: 'Rosario Cainzo',
      rol: 'UX/UI Designer',
      linkedin: '',
      twitter: ''
    },
  ]

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Team | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Meet the team at the metacaloud metaverse!' }
    );
  }

}
