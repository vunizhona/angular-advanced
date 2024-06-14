import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommentI, CommentsService} from "../comments.service";
import { from, map, Observable, Subscription, tap} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ErrorBlockComponent} from "../shared/error-block/error-block.component";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    ErrorBlockComponent
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnDestroy, OnInit{
  public comments: CommentI[] | undefined;
  public mySubscription: Subscription;
  public $comments: Observable<CommentI[]>
  public error: string | undefined;

  constructor(public commentsService: CommentsService) {

  this.mySubscription = this.commentsService.getAllComments().pipe(
    map(items => items.slice(1, 10)),
    tap(items => console.log('tap', items) ),
    )
      .subscribe(comments => {
        this.comments = comments;
        this.commentsService.latestComment.next(this.comments[0].body)
      })

    this.$comments = this.commentsService.getAllComments().pipe(map(items => items.slice(1, 10)))

    this.commentsService.getComment().subscribe({next: (next) => {console.log('success')}, error: error => {this.error = error.message}})
  }

  ngOnInit() {
  }

  trackByAsyncData(index: number, item: CommentI): number{
    return item.id
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe()
  }

}
