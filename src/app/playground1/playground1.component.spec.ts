import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playground1Component } from './playground1.component';

describe('Playground1Component', () => {
  let component: Playground1Component;
  let fixture: ComponentFixture<Playground1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Playground1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Playground1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
