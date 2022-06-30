import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { TemasComponent } from './temas.component';

describe('TemasComponent', () => {
  let component: TemasComponent;
  let fixture: ComponentFixture<TemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
