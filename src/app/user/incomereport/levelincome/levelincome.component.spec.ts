import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelincomeComponent } from './levelincome.component';

describe('LevelincomeComponent', () => {
  let component: LevelincomeComponent;
  let fixture: ComponentFixture<LevelincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelincomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
