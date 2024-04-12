import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  themes: any[] = [];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.getThemes();
  }

  getThemes(): void {
    this.themeService.getThemes()
      .subscribe(
        (themes: any[]) => {
          this.themes = themes.sort((a, b) => b.subscribers - a.subscribers);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}