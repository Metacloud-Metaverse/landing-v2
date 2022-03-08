import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc } from 'src/app/modules/docs/entities/doc';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.scss']
})
export class DocPageComponent implements OnInit {

  doc?: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadParams();
  }

  loadParams() {
    this.route.params.subscribe(params => {
      if(params['slug']){
        this.loadDocs(params['slug']);
      } else {
        // Redirigir a pagina de error, que no existe
      }
    });
  }

  loadDocs(slug: string) {
    let docs = Doc.DOCS;
    for (const art of docs) {
      if(art.slug == slug){
        this.doc = art;
        return;
      }
    }

    alert('not exist');
  }

}
