import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectteamComponent } from './directteam.component';

describe('DirectteamComponent', () => {
  let component: DirectteamComponent;
  let fixture: ComponentFixture<DirectteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
