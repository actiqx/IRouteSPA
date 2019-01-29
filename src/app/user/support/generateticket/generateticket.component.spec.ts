import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateticketComponent } from './generateticket.component';

describe('GenerateticketComponent', () => {
  let component: GenerateticketComponent;
  let fixture: ComponentFixture<GenerateticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
