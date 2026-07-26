import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css',
})
export class CourseSummaryWidget implements OnInit {

  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.totalCourses = courses.length;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  addSampleCourse(): void {
    this.courseService.createCourse({
      name: 'Artificial Intelligence',
      code: 'CS106',
      credits: 4,
      gradeStatus: 'pending'
    }).subscribe({
      next: () => {
        alert('Course added successfully!');
        this.loadCourses(); // Refresh the count
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}