import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  loan_amount = 1000;
  monthly_payment = 200;
  late_payment = 10;

  constructor() { }

  ngOnInit(): void {
  }

  calculatePayment(): void {
    if (this.loan_amount && this.loan_amount > 0) {
      this.monthly_payment = 0.02 * this.loan_amount;
      this.late_payment = 0.05 * this.monthly_payment;
    } else {
      this.monthly_payment = -1;
      this.late_payment = -1;
    }
  }

}
