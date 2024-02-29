import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelicioForgotPasswordComponent } from './delicio-forgot-password.component';

describe('DelicioForgotPasswordComponent', () => {
  let component: DelicioForgotPasswordComponent;
  let fixture: ComponentFixture<DelicioForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelicioForgotPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelicioForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
