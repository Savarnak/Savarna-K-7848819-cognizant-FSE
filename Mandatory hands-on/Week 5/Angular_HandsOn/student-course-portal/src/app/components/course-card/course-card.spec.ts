import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

import { CourseCard } from './course-card';
import { Course } from '../../models/course.model';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name in h3 when @Input course is provided', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(heading.textContent).toContain('Data Structures');
  });

  it('should emit enroll event when enroll button is clicked', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const emitSpy = vi.spyOn(component.enroll, 'emit');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenCalledWith(mockCourse);
  });

  it('should log changes when ngOnChanges is called', () => {
    const logSpy = vi.spyOn(console, 'log');

    const changes = {
      course: new SimpleChange(null, mockCourse, true)
    };

    component.ngOnChanges(changes);

    expect(logSpy).toHaveBeenCalledWith('Course changed:', changes['course']);
  });

  it('should toggle details visibility when toggleDetails is called', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    expect(component.isExpanded).toBe(false);

    component.toggleDetails();

    expect(component.isExpanded).toBe(true);
  });
});
