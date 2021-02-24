import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  showError: Boolean = false;

  errorMessage: string;

  errorDescription: string;

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.setUpContactForm();
  }

  private setUpContactForm(): void{
    this.contactForm = this.fb.group({
      'name': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'message': [null, [Validators.required, Validators.minLength(10)]]
    });
  }

  public onSubmit(formVal: FormGroup) {
    if(this.contactForm.invalid) {
      this.errorMessage = 'Validation Error';
      this.errorDescription = 'Fill all the fields'
      // return;
      console.log('Invalid Form');
      this.showError = true;
    }
    this.showError = false;

    console.log('Form values ', this.contactForm.value);
  }

  public get name() {
    return this.contactForm.get('name');
  }

  public get email() {
    return this.contactForm.get('email')
  }

  public get message() {
    return this.contactForm.get('message')
  }

}
