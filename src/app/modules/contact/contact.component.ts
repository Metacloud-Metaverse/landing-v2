import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
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
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
    is_add_newsletter: new FormControl(false)
  });

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
  }

  onClickSubmit() {
    let item = this.contactForm.value;
    item.created_at = Timestamp.fromDate(new Date());
    item.updated_at = Timestamp.fromDate(new Date());

    console.log(item);

    this.itemsCollection!.add(item);

    this.contactForm.reset();

    this._snackBar.open("Your message has been sent successfully", '', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: 'snackbar_success'
    }); 
  }
}
