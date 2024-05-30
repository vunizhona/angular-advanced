import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../comments.service";

@Component({
  selector: 'app-comments-checker',
  standalone: true,
  imports: [],
  templateUrl: './comments-checker.component.html',
  styleUrl: './comments-checker.component.css'
})
export class CommentsCheckerComponent implements OnInit{
 constructor(public commentsService: CommentsService) {
 }


 ngOnInit() {
   this.commentsService.storedComment.subscribe(item => console.log(item, 'comments checker'))
   this.commentsService.latestComment.subscribe(item => console.log(item, 'comments checker subject'))
 }
}
