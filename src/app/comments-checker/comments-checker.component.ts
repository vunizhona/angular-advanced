import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommentsService} from "../comments.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comments-checker',
  standalone: true,
  imports: [],
  templateUrl: './comments-checker.component.html',
  styleUrl: './comments-checker.component.css'
})
export class CommentsCheckerComponent implements OnInit, OnDestroy{
 private $subscription: Subscription | undefined;
 constructor(public commentsService: CommentsService) {
 }


 ngOnInit() {
   this.$subscription = this.commentsService.latestComment.subscribe(item => console.log(item, 'comments checker subject'))
 }

  ngOnDestroy(): void {
   this.$subscription?.unsubscribe();
  }

}
