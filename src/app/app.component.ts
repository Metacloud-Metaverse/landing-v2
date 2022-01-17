import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lorem ipsum dolor sit amet | Metacloud';

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ){}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'PR, media coverage, public relations, Pr agency, Pr management, Newsroom'},
      {name: 'description', content: 'You know how PR always sounded so complicated to get started with? Let’s change that! Manage your relations, create an online newsroom and create and share your press releases targeting relevant reporters and influencers.'},
      {name: 'robots', content: 'index, follow'}
    ])
  }
}
