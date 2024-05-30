import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommentI, CommentsService} from "../comments.service";
import { from, map, Observable, Subscription, tap} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnDestroy, OnInit{
  public comments: CommentI[] | undefined;
  public mySubscription: Subscription;
  public $comments: Observable<CommentI[]>
  public error: string | undefined;
  public numbers = [1,2,3,4,5]

  constructor(public commentsService: CommentsService) {

  this.mySubscription = this.commentsService.getAllComments().pipe(
    map(items => items.slice(1, 10)),
    tap(items => console.log('tap', items) ),
    )
      .subscribe(comments => {
        this.comments = comments;
        this.commentsService.storedComment.next(this.comments[0].body)
        this.commentsService.latestComment.next(this.comments[0].body)
      })

    this.$comments = this.commentsService.getAllComments().pipe(map(items => items.slice(1, 10)))

    this.commentsService.getComment().subscribe(() => console.log('success'), (error) => this.error = error.message)
  }

  ngOnInit() {
    const $numbers: Observable<number> = from(this.numbers);

    $numbers.subscribe({
      next: value => console.log("Found value", value),
      error: error => console.log('Error')
    })

    this.commentsService.storedComment.subscribe(item => console.log(item, 'behaviour item'))
    this.commentsService.latestComment.subscribe(item => console.log(item, 'subject item'))
    this.commentsService.storedComment.next('new value')
    this.commentsService.latestComment.next('new value')
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe()
  }

}
