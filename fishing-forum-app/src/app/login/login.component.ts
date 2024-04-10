import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Corrected import

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = ''; // Assign an initial value to the password property

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    // Call AuthService.login method with email and password
    this.authService.login(this.email, this.password);
  }
}