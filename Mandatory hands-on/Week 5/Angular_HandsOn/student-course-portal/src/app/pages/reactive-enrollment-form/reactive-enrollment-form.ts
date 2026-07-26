import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],

      studentEmail: this.fb.control(
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck]
      ),

      courseId: [
        '',
        [Validators.required, this.noCourseCode]
      ],

      preferredSemester: ['Odd', Validators.required],

      agreeToTerms: [false, Validators.requiredTrue],

      additionalCourses: this.fb.array<FormControl<string>>([])
    });

  }

  // Custom synchronous validator
  noCourseCode(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (value && value.toString().startsWith('XX')) {
      return { noCourseCode: true };
    }

    return null;
  }

  // Custom async validator
  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise(resolve => {

      setTimeout(() => {

        if (control.value && control.value.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }

      }, 800);

    });

  }

  // Typed getter for FormArray
  get additionalCourses(): FormArray<FormControl<string>> {
    return this.enrollForm.get('additionalCourses') as FormArray<FormControl<string>>;
  }

  addCourse() {
    this.additionalCourses.push(
      new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    );
  }

  removeCourse(index: number) {
    this.additionalCourses.removeAt(index);
  }

  onSubmit() {

    console.log('Form Value:', this.enrollForm.value);

    // value excludes disabled controls.
    // getRawValue() includes disabled controls.
    console.log('Raw Value:', this.enrollForm.getRawValue());

    if (this.enrollForm.valid) {
      this.submitted = true;
    }

  }

}