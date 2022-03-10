import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Timestamp } from "firebase/firestore";

export interface WebContact {
  email: string;
  subject: string;
  message: string;
  is_add_newsletter: boolean;
  status: number;
  created_at: any;
  updated_at: any;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  itemsCollection?: AngularFirestoreCollection<WebContact>;

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
    message: new FormControl('', [Validators.required, Validators.minLength(3)]),
    is_add_newsletter: new FormControl(false)
  });

  errors = new Array<any>();

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private _snackBar: MatSnackBar,
    protected readonly firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'If you have any questions or concerns, contact metacloud.' }
    );
    this.loadDatabase();
  }

  loadDatabase() {
    this.itemsCollection = this.firestore.collection<WebContact>('web_contact');

    /* this.contactForm.valueChanges.subscribe(res => {
      this.processValidationErrors();
    }); */
  }

  onClickSubmit() {
    if(this.contactForm.invalid){
      this.processValidationErrors();
      return;
    }

    let item = this.contactForm.value;
    item.created_at = Timestamp.fromDate(new Date());
    item.updated_at = Timestamp.fromDate(new Date());

    this.itemsCollection!.add(item);

    this.errors = [];
    this.contactForm.reset();

    this._snackBar.open("Your message has been sent successfully", '', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: 'snackbar_success'
    });
  }

  processValidationErrors() {

    this.errors = new Array<any>();

    Object.keys(this.contactForm.controls).forEach(key => {

      let elementErrors: ValidationErrors|null = this.contactForm.get(key)!.errors;
      if (elementErrors) {
        Object.keys(elementErrors).forEach(keyError => {
          this.errors.push({
            'control': key,
            'error': keyError
          });
        });
      }
    });
  }
}
