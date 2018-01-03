import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionNewComponent } from './question-new/question-new.component';
import { AnswerNewComponent } from './answer-new/answer-new.component';
import { QuestionShowComponent } from './question-show/question-show.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: QuestionListComponent
  },
  {
    path: 'create',
    component: QuestionNewComponent
  },
  {
    path: 'questions/answer/:id',
    component: AnswerNewComponent
  },
  {
    path: 'show/question/:id',
    component: QuestionShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
