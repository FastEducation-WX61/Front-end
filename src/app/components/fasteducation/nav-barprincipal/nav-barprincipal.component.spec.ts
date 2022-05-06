import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarprincipalComponent } from './nav-barprincipal.component';

describe('NavBarprincipalComponent', () => {
  let component: NavBarprincipalComponent;
  let fixture: ComponentFixture<NavBarprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
