import { Routes } from '@angular/router';

import { EnrollmentHome } from '../../pages/enrollment-home/enrollment-home';
import { EnrollmentForm } from '../../pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from '../../pages/reactive-enrollment-form/reactive-enrollment-form';

export const ENROLLMENT_ROUTES: Routes = [
  {
    path: '',
    component: EnrollmentHome,
    children: [
      {
        path: '',
        component: EnrollmentForm
      },
      {
        path: 'reactive',
        component: ReactiveEnrollmentForm
      }
    ]
  }
];