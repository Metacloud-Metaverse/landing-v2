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
