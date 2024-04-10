import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor() {}

  login(email: string, password: string): void {
    // Implement the login logic here
    // Set isLoggedIn to true upon successful login
    this.isLoggedIn = true;
  }

  logout(): void {
    // Implement the logout logic here
    // Set isLoggedIn to false upon logout
    this.isLoggedIn = false;
  }

  register(email: string, password: string): void {
    // Implement the register logic here
    // For now, just set isLoggedIn to true upon registration
    this.isLoggedIn = true;
  }
}