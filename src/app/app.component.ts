import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommentsComponent} from "./comments/comments.component";
import {CommentsCheckerComponent} from "./comments-checker/comments-checker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommentsComponent, CommentsCheckerComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'angular-advanced';

}
