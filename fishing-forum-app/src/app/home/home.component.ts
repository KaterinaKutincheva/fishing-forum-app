import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latestPosts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getLatestPosts();
  }

  getLatestPosts(): void {
    this.postService.getLatestPosts()
      .subscribe(
        (posts) => {
          this.latestPosts = posts;
        },
        (error) => {
          console.error(error);
          // Handle error if needed
        }
      );
  }
}