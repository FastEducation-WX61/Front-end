import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { RamasComponent } from './ramas.component';

describe('RamasComponent', () => {
  let component: RamasComponent;
  let fixture: ComponentFixture<RamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamasComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
