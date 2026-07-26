import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';

import * as CourseActions from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CourseCard,
    FormsModule,
    AsyncPipe
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses$!: Observable<Course[]>;

  searchTerm = '';
  selectedCourse = '';

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

    this.store.dispatch(CourseActions.loadCourses());

    this.courses$ =
      this.store.select(selectAllCourses);

  }

 onEnroll(course: Course): void {

  this.selectedCourse = course.name;

  this.store.dispatch(
    EnrollmentActions.enrollCourse({
      courseId: course.id
    })
  );

  alert('Enrolled in ' + course.name);

}

  viewCourse(course: Course): void {
    this.router.navigate(['courses', course.id]);
  }

  updateSearch(): void {
    this.router.navigate(['courses'], {
      queryParams: {
        search: this.searchTerm
      }
    });
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.router.navigate(['courses']);
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

}