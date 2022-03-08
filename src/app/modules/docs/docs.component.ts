import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Doc } from 'src/app/modules/docs/entities/doc';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  title = 'Documentation | metacloud'

  /* breadcrumb:any = [
    {route: 'Documentation'},
    {route: 'Marketplace'}
  ] */

  docsNav: any[] = [
    {
      name: 'home',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
        {value: 'oddish-1', viewValue: 'Oddish'},
        {value: 'bellsprout-2', viewValue: 'Bellsprout'},
      ],
    },
    {
      name: 'Water',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Squirtle'},
        {value: 'psyduck-4', viewValue: 'Psyduck'},
        {value: 'horsea-5', viewValue: 'Horsea'},
      ],
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        {value: 'charmander-6', viewValue: 'Charmander'},
        {value: 'vulpix-7', viewValue: 'Vulpix'},
        {value: 'flareon-8', viewValue: 'Flareon'},
      ],
    },
    {
      name: 'Psychic',
      pokemon: [
        {value: 'mew-9', viewValue: 'Mew'},
        {value: 'mewtwo-10', viewValue: 'Mewtwo'},
      ],
    },
  ];

  @Input() isSidebarOpen:boolean = true;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public router: Router,
    private route: ActivatedRoute,
    protected titleService: Title,
    protected metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Documentation | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Lorem ipsum dolor sit amet' }
    );
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSidebarOpen = false;
        }
    });
  }

  sidebarCloseMobile(){
    if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      this.isSidebarOpen = false;
    }
  }
}
