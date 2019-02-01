/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaidlinklistComponent } from './paidlinklist.component';

describe('PaidlinklistComponent', () => {
  let component: PaidlinklistComponent;
  let fixture: ComponentFixture<PaidlinklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidlinklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidlinklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
