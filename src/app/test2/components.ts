import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'textfield',
  template: '<input type="text" [(ngModel)]="field" (keyup)="changeField.emit(field)" />'
})
// tslint:disable-next-line:component-class-suffix
export class TextField {
  @Input() field = '';
  @Output() changeField = new EventEmitter();
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'child-component',
  template: `<h2>
    Title: Test 2
    <h2><br /><textfield field="" (changeField)="handleChangeFieldValue($event)"></textfield></h2>
  </h2>`
})
export class ChildComponent {
  // @Input() fieldValue = '';
  @Output() changeFieldValue = new EventEmitter();

  handleChangeFieldValue(value: string): void {
    this.changeFieldValue.emit(value);
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-app',
  template: `<div>
    <child-component (changeFieldValue)="handlePassedValue($event)"></child-component> <br />
    Title is {{ title }}
  </div>`
})
export class Test02Component {
  title = '';

  handlePassedValue(value: string): void {
    this.title = value;
  }
}
