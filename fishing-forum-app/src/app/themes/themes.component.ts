import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service'; // Import the ThemeService

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  themes: any[] = []; // Initialize the themes array

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Call the service method to fetch themes
    this.themeService.getThemes().subscribe(themes => {
      this.themes = themes;
      console.log(themes); // Log fetched themes
      this.themes = themes;
    });
  }
}