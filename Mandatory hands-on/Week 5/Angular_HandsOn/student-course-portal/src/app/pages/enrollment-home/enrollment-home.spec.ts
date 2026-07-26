import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { EnrollmentHome } from './enrollment-home';

describe('EnrollmentHome', () => {
  let component: EnrollmentHome;
  let fixture: ComponentFixture<EnrollmentHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentHome],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentHome);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
