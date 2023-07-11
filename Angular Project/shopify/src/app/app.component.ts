import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PostService } from './services/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  constructor(private router: Router) {}

    newChange(): void {
        this.router.navigateByUrl('login-screen');
    }

   
  title = 'shopify';
}
