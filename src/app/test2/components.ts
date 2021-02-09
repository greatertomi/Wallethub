import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'textfield',
  template: `
    <div>
      <input type="text" [(ngModel)]="field" (keyup)="changeField.emit(field)"
             class="form-control"/>
    </div>`
})
// tslint:disable-next-line:component-class-suffix
export class TextField {
  @Input() field = '';
  @Output() changeField = new EventEmitter();
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'child-component',
  template: `
    <textfield field="" (changeField)="handleChangeFieldValue($event)"></textfield>`
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
  template: `
    <app-header title="Challenge on attribute binding"></app-header>
    <div class="mainContent">
      <div class="col-md-8 col-sm-12">
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="mb-3 cardTitle">Question 2</h3>
            <div>
              <div class="mb-1"> Update the following components to meet the requirements:</div>
              <div class="mb-1"> Bind [field] of [textfield] component to its text input</div>
              <div class="mb-1"> Pass value of [field] from [textfield] component to [title] property of component [ng-app]</div>
            </div>
          </div>
        </div>
        <div>
          <child-component (changeFieldValue)="handlePassedValue($event)"></child-component> <br />
          Title is {{ title }}
        </div>
      </div>
    </div>`
})
export class Test02Component {
  title = '';

  handlePassedValue(value: string): void {
    this.title = value;
  }
}
