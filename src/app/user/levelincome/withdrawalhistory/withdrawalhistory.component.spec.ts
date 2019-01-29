import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalhistoryComponent } from './withdrawalhistory.component';

describe('WithdrawalhistoryComponent', () => {
  let component: WithdrawalhistoryComponent;
  let fixture: ComponentFixture<WithdrawalhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
