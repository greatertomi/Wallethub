import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test6',
  templateUrl: './test6.component.html',
  styleUrls: ['./test6.component.scss']
})
export class Test6Component implements OnInit {
  review_input = '';
  /*review_input =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Maecenas tincidunt vestibulum ligula, sed viverra erat tempus nec.

     Pellentesque blandit mauris congue elit eleifend, facilisis tristique dolor dictum:
        1) Nulla et tempus orci
        2) Integer semper porttitor faucibus
     At https://wallethub.com <b>bolded text</b>`;*/

  review_content = '';
  constructor() { }

  ngOnInit(): void {
  }

  previewContent(): void {
    this.review_content = this.review_input;
  }
}
