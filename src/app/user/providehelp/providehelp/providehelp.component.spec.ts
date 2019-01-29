import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidehelpComponent } from './providehelp.component';

describe('ProvidehelpComponent', () => {
  let component: ProvidehelpComponent;
  let fixture: ComponentFixture<ProvidehelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidehelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
