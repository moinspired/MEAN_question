import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionNewComponent } from './question-new/question-new.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionShowComponent } from './question-show/question-show.component';

import { UserService } from './user.service';
import { QuestionService } from './question.service';
import { AnswerService } from './answer.service';
import { AnswerNewComponent } from './answer-new/answer-new.component';
import { FilterPipe } from './filter.pipe';
import { OrderByPipe } from './sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionNewComponent,
    QuestionListComponent,
    QuestionShowComponent,
    AnswerNewComponent,
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    QuestionService,
    AnswerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
