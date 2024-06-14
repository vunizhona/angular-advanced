import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

export interface CommentI {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}



@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  latestComment = new BehaviorSubject<string>('')

  constructor(public http: HttpClient) { }

  public getAllComments(): Observable<CommentI[]>{
    return this.http.get<CommentI[]>('https://jsonplaceholder.typicode.com/comments')
  }

  public getComment(): Observable<CommentI[]>{
    return this.http.get<CommentI[]>('https://jsonplaceholder.typicode.com/commentssssss/1')
  }
}
