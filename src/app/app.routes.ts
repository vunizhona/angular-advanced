import { Routes } from '@angular/router';
import {CommentsComponent} from "./comments/comments.component";
import {CommentsCheckerComponent} from "./comments-checker/comments-checker.component";
import {HomeComponent} from "./home/home.component";
import {NumbersObservableComponent} from "./numbers-observable/numbers-observable.component";

export const routes: Routes = [
  {path: '', loadComponent: () => HomeComponent},
  {path: 'comments', loadComponent: () => CommentsComponent},
  {path: 'comments-checker', loadComponent: () => CommentsCheckerComponent},
  {path: 'numbers-observable', loadComponent: () => NumbersObservableComponent},
];
