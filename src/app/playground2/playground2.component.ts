import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-playground2',
  templateUrl: './playground2.component.html',
  styleUrls: ['./playground2.component.scss']
})
export class Playground2Component implements OnInit {
  @Input() name = '';
  @Output() handleChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('My name is', this.name);
  }

}
