/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinklistComponent } from './linklist.component';

describe('LinklistComponent', () => {
  let component: LinklistComponent;
  let fixture: ComponentFixture<LinklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
