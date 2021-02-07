import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground1',
  templateUrl: './playground1.component.html',
  styleUrls: ['./playground1.component.scss']
})
export class Playground1Component implements OnInit {
  title = '';
  constructor() { }

  ngOnInit(): void {
  }

  passChangeDown(value: string): void {
    // console.log('pass down', value);
    this.title = value;
  }

}
