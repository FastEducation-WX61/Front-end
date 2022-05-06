import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarloginComponent } from './nav-barlogin.component';

describe('NavBarloginComponent', () => {
  let component: NavBarloginComponent;
  let fixture: ComponentFixture<NavBarloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
