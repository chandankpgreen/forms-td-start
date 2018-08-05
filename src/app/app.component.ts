import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  genValue = "female";
  submitted: boolean = false;
  user = {
    username: '',
    email: '',
    sercretQuestion: '',
    answer: '',
    gender: '',
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    /// the onle below will reset all form values
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    // the one below will just override specific values.
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    this.user.username = this.signupForm.form.value.userData.username;
    this.user.email = this.signupForm.form.value.userData.email;
    this.user.sercretQuestion = this.signupForm.form.value.sercret;
    this.user.answer = this.signupForm.form.value.questionAnswer;
    this.user.gender = this.signupForm.form.value.gender;
    this.signupForm.reset();
  }
}
