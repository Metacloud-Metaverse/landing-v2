import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MainService } from 'src/app/services/main.service';

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
    protected mainService: MainService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'If you have any questions or concerns, contact metacloud.' }
    );
  }

  onClickSubmit() {
    if(this.contactForm.invalid){
      this.processValidationErrors();
      return;
    }

    let item = this.contactForm.value;

    this.mainService.sendContact(item).subscribe(res => {});

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
