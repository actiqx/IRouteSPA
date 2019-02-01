/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PendinglistComponent } from './pendinglist.component';

describe('PendinglistComponent', () => {
  let component: PendinglistComponent;
  let fixture: ComponentFixture<PendinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
