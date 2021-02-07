import { Component} from '@angular/core';
import {emailRegex, passwordRegex} from '../constants';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component {
  email = '';
  password = '';
  emailErrorMsg = '';
  passwordErrorMsg = '';
  logged_in = false;

  handleFormSubmit(event: any): void {
    event.preventDefault();
    const emailIsValid = emailRegex.test(this.email.toLowerCase());
    const passwordIsValid = passwordRegex.test(this.password);
    if (!emailIsValid && !passwordIsValid) {
      this.emailErrorMsg = `${this.email} not in correct format`;
      this.logged_in = false;
      this.passwordErrorMsg = `${this.password} should have atleast 1 uppercase character, lowercase character, number and special character`;
    } else if (!emailIsValid) {
      this.emailErrorMsg = `${this.email} not in correct format`;
      this.passwordErrorMsg = '';
      this.logged_in = false;
    } else if (!passwordIsValid) {
      this.passwordErrorMsg = `${this.password} should have atleast 1 uppercase character, lowercase character, number and special character`;
      this.emailErrorMsg = '';
      this.logged_in = false;
    } else {
      this.passwordErrorMsg = '';
      this.emailErrorMsg = '';
      this.logged_in = true;
    }
  }

}
