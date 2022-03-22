import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';

@Component({
  selector: 'app-media-kit-page',
  templateUrl: './media-kit-page.component.html',
  styleUrls: ['./media-kit-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class MediaKitPageComponent implements OnInit {

  tolltip1Active = false;
  isCopied = false;

  logos:any = [
    { name: 'Logo Black', link: 'logo-black.zip', image: 'logo-black.png' },
    { name: 'Logo White', link: 'logo-white.zip', image: 'logo-white.png' },
    { name: 'Logo Total Black', link: 'logo-total-black.zip', image: 'logo-total-black.png' },
    { name: 'Logo Total White', link: 'logo-total-white.zip', image: 'logo-total-white.png' },
    { name: 'Logo Black Background', link: 'logo-black-background.zip', image: 'logo-black-background.png' },
    { name: 'Logo Total Black Background', link: 'logo-total-black-background.zip', image: 'logo-total-black-background.png' },
    { name: 'Logo White Background', link: 'logo-white-background.zip', image: 'logo-white-background.png' },
    { name: 'Logo Total White Background', link: 'logo-total-white-background.zip', image: 'logo-total-white-background.png' },
    { name: 'Logo Color Background', link: 'logo-color-background.zip', image: 'logo-color-background.png' },
    { name: 'Icon White', link: 'icon-white.zip', image: 'icon-white.png' },
    { name: 'Icon Total White', link: 'icon-total-white.zip', image: 'icon-total-white.png' },
    { name: 'Icon Black', link: 'icon-black.zip', image: 'icon-black.png' },
    { name: 'Icon Total Black', link: 'icon-total-black.zip', image: 'icon-total-black.png' },
    { name: 'Icon White Background', link: 'icon-white-background.zip', image: 'icon-white-background.png' },
    { name: 'Icon Total White Background', link: 'icon-total-white-background.zip', image: 'icon-total-white-background.png' },
    { name: 'Icon Black Background', link: 'icon-black-background.zip', image: 'icon-black-background.png' },
    { name: 'Icon Total Black Background', link: 'icon-total-black-background.zip', image: 'icon-total-black-background.png' },
  ]

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Media Kit | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );
  }

}
