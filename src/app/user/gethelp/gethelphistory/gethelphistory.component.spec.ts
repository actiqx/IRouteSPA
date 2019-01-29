import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GethelphistoryComponent } from './gethelphistory.component';

describe('GethelphistoryComponent', () => {
  let component: GethelphistoryComponent;
  let fixture: ComponentFixture<GethelphistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GethelphistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GethelphistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
