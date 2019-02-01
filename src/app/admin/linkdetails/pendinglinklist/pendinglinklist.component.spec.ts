/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PendinglinklistComponent } from './pendinglinklist.component';

describe('PendinglinklistComponent', () => {
  let component: PendinglinklistComponent;
  let fixture: ComponentFixture<PendinglinklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendinglinklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendinglinklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
