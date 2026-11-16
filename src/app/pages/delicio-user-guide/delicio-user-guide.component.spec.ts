import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { DelicioUserGuideComponent } from './delicio-user-guide.component';

describe('DelicioUserGuideComponent', () => {
  let component: DelicioUserGuideComponent;
  let fixture: ComponentFixture<DelicioUserGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelicioUserGuideComponent ],
      imports: [CommonModule],
      providers: [Title, Meta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelicioUserGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
