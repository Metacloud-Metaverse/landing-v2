import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: ['./terms-page.component.scss']
})
export class TermsPageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Terms and Conditions | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Read the terms and conditions for metacloud.' }
    );
  }

}
