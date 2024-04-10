import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = ''; // Assign an initial value to the password property

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    // Call AuthService.register method with email and password
    this.authService.register(this.email, this.password);
  }
}