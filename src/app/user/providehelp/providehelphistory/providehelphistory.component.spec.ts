import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidehelphistoryComponent } from './providehelphistory.component';

describe('ProvidehelphistoryComponent', () => {
  let component: ProvidehelphistoryComponent;
  let fixture: ComponentFixture<ProvidehelphistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidehelphistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidehelphistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
