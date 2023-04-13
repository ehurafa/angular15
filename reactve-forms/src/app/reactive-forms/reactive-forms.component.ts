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
    lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(private fb: FormBuilder) {}

  public submitForm() {
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
      console.log(this.registerForm.value.firstName);
      console.log(this.registerForm.value.lastName);
    }
  }

}
