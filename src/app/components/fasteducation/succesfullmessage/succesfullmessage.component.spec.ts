import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfullmessageComponent } from './succesfullmessage.component';

describe('SuccesfullmessageComponent', () => {
  let component: SuccesfullmessageComponent;
  let fixture: ComponentFixture<SuccesfullmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesfullmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfullmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
