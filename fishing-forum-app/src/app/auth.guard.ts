import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Import AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Use the isLoggedIn property instead of the method
    if (this.authService.isLoggedIn) { // Remove parentheses
      return true;
    } else {
      // Redirect to the login page if not logged in
      this.router.navigate(['/login']);
      return false;
    }
  }
}