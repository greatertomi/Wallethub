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

}
