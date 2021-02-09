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
      mainTask: 'Challenge on calculation and pipe.',
      path: '/test1'
    },
    {
      title: 'Test 2',
      mainTask: 'Challenge on attribute binding.',
      path: '/test2'
    },
    {
      title: 'Test 3',
      mainTask: 'Challenge on form validation.',
      path: '/test3'
    },
    {
      title: 'Test 4',
      mainTask: 'Challenge on generating username',
      path: '/test4'
    },
    {
      title: 'Test 5',
      mainTask: 'Challenge on Rxjs'
    },
    {
      title: 'Test 6',
      mainTask: 'Challenge on text display',
      path: '/test6'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
