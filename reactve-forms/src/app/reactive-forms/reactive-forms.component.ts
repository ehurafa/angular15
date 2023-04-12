import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.sass']
})
export class ReactiveFormsComponent {

  public registerForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['']
  })

  constructor(private fb: FormBuilder) {}

  public submitForm() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.value.firstName);
    console.log(this.registerForm.value.lastName);
  }

}
