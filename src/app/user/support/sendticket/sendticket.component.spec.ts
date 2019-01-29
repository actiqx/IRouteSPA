import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendticketComponent } from './sendticket.component';

describe('SendticketComponent', () => {
  let component: SendticketComponent;
  let fixture: ComponentFixture<SendticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
