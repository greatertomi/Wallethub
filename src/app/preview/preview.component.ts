import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  tests = [
    {
      title: 'Test 1',
      mainTask: 'Challenge on calculation and pipe'
    },
    {
      title: 'Test 2',
      mainTask: 'Challenge on attribute binding.'
    },
    {
      title: 'Test 3',
      mainTask: 'Challenge on form validation'
    },
    {
      title: 'Test 4',
      mainTask: 'Challenge on generating username'
    },
    {
      title: 'Test 5',
      mainTask: 'Challenge on Rxjs'
    },
    {
      title: 'Test 6',
      mainTask: 'Challenge on text display'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
