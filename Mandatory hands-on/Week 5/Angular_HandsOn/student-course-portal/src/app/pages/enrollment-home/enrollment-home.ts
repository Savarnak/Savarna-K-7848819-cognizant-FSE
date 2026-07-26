import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-enrollment-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './enrollment-home.html',
  styleUrl: './enrollment-home.css'
})
export class EnrollmentHome {}