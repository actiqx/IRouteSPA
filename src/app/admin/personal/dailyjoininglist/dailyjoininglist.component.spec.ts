/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DailyjoininglistComponent } from './dailyjoininglist.component';

describe('DailyjoininglistComponent', () => {
  let component: DailyjoininglistComponent;
  let fixture: ComponentFixture<DailyjoininglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyjoininglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyjoininglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
