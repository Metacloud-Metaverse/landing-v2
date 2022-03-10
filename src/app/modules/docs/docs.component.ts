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
      title: 'World',
      icon: 'travel_explore',
      links: [
        { title: 'Introduction', url: 'introduction', type: 0 },
        { title: 'FAQ', url: 'faq', type: 0 },
        {
          title: 'DAO',
          type: 1,
          links: [
            {
              title: 'Overview',
              type: 1,
              links: [
                /* { title: 'What Is The DAO?', url: 'what-is-the-dao', type: 0 }, */
                { title: 'Smart contracts fuel the DAO', url: 'smart-contracts-fuel-the-dao', type: 0 },
                { title: 'On Smart Contracts', url: 'on-smart-contracts', type: 0 },
                { title: 'Using the DAO', url: 'using-the-dao', type: 0 },
                { title: 'On How the DAO Works', url: 'on-how-the-dao-works', type: 0 },
                { title: 'Smart Contracts Within the DAO', url: 'smart-contracts-within-the-dao', type: 0 },
                { title: 'Metacloud´s DAO Fund', url: 'metacloud-dao-fund', type: 0 },
                /* { title: 'How The DAO Works', url: 'how-the-dao-works', type: 0 }, */
                /* { title: "The DAO's Smart Contracts", url: 'the-dao-smart-contracts', type: 0 }, */
                /* { title: 'The DAO Fund', url: '', type: 0 }, */
                /* { title: 'DAO Limitations', url: '', type: 0 }, */
                /* { title: 'Participation Requirements', url: '', type: 0 }, */
              ]
            },
            { title: 'DAO User Guide', url: 'dao-user-guide', type: 2 },
            { title: 'Hardware Acceleration', url: 'hardware-acceleration', type: 2 },
          ]
        },
      ],
    },
    /* {
      title: 'Market',
      icon: 'store',
    },
    {
      title: 'Create',
      icon: 'draw',
    }, */
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
