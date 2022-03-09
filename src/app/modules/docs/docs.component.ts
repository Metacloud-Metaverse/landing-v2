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
      icon: 'home',
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
                { title: 'What Is The DAO?', url: 'what-is-the-dao', type: 0 },
                { title: 'DAO Uses', url: 'dao-uses', type: 0 },
                { title: 'How The DAO Works', url: 'how-the-dao-works', type: 0 },
                { title: "The DAO's Smart Contracts", url: 'the-dao-smart-contracts', type: 0 },
                { title: 'The DAO Fund', url: '', type: 0 },
                { title: 'DAO Limitations', url: '', type: 0 },
                { title: 'Participation Requirements', url: '', type: 0 },
              ]
            },
            {
              title: 'Grants',
              type: 1,
              links: [
                { title: 'Community Grants', url: 'community-grants', type: 0 },
                { title: 'Requesting Grants', url: 'requesting-grants', type: 0 },
                { title: 'Receiving Grants', url: 'receiving-grants', type: 0 },
              ]
            },
            { title: 'DAO User Guide', url: 'dao-user-guide', type: 0 },
          ]
        },
        { title: 'Whitepaper', url: 'whitepaper', type: 0 },
        { title: 'Hardware Acceleration', url: 'hardware-acceleration', type: 0 },
      ],
    },
    {
      title: 'Market',
      icon: 'home',
    }
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
