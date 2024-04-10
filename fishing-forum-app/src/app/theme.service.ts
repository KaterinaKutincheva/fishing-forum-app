import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private apiUrl = 'https://localhost:3000/api/themes'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getThemes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}