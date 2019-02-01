/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RejectlinklistComponent } from './rejectlinklist.component';

describe('RejectlinklistComponent', () => {
  let component: RejectlinklistComponent;
  let fixture: ComponentFixture<RejectlinklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectlinklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectlinklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
