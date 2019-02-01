/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaidwithdrawallistComponent } from './paidwithdrawallist.component';

describe('PaidwithdrawallistComponent', () => {
  let component: PaidwithdrawallistComponent;
  let fixture: ComponentFixture<PaidwithdrawallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidwithdrawallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidwithdrawallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
