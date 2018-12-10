import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  formu = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',
        [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
        ],
        UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    }),
  });

  get username(){
    return this.formu.get('account.username');
  }
  get password(){
    return this.formu.get('account.password');
  }

  login(){
    // let isValid = authService.login(this.formu.value);
    // if (!isValid) {
      this.formu.setErrors({
        invalidLogin: true
      });
    // } else { }
  }

}
