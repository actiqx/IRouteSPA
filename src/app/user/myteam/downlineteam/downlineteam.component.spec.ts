import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlineteamComponent } from './downlineteam.component';

describe('DownlineteamComponent', () => {
  let component: DownlineteamComponent;
  let fixture: ComponentFixture<DownlineteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownlineteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownlineteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
