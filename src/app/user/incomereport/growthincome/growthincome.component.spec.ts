import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthincomeComponent } from './growthincome.component';

describe('GrowthincomeComponent', () => {
  let component: GrowthincomeComponent;
  let fixture: ComponentFixture<GrowthincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthincomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
