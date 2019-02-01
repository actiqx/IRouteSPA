/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DtilesComponent } from './dtiles.component';

describe('DtilesComponent', () => {
  let component: DtilesComponent;
  let fixture: ComponentFixture<DtilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
