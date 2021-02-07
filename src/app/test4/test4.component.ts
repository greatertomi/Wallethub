import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.scss']
})
export class Test4Component implements OnInit {
  firstName = '';
  lastName = '';
  userName = '';
  formError = false;

  constructor() { }

  ngOnInit(): void {
  }

  generateUsername(): void {
    console.log(this.firstName, this.lastName);
    if (this.firstName === '' || this.lastName === '') {
      this.formError = true;
      this.userName = '';
    } else {
      this.formError = false;
      const num = Math.floor(Math.random() * 9) + 1;
      this.userName = `${this.firstName.toLowerCase()}_${this.lastName.toLowerCase()}_${num}`;
    }
  }

}
