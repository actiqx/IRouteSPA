import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveticketComponent } from './receiveticket.component';

describe('ReceiveticketComponent', () => {
  let component: ReceiveticketComponent;
  let fixture: ComponentFixture<ReceiveticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
