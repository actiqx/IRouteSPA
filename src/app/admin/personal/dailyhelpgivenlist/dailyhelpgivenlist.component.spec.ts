/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DailyhelpgivenlistComponent } from './dailyhelpgivenlist.component';

describe('DailyhelpgivenlistComponent', () => {
  let component: DailyhelpgivenlistComponent;
  let fixture: ComponentFixture<DailyhelpgivenlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyhelpgivenlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyhelpgivenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
