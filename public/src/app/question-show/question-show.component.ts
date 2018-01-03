import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Question } from '../question';
import { Answer } from '../answer';
import { User } from '../user';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.css']
})
export class QuestionShowComponent implements OnInit {

  question: Question = new Question();
  answer: Answer = new Answer();
  currentUser : User = new User();
  question_id: string;

  
  constructor( private _us: UserService, private _qs: QuestionService, private _route: ActivatedRoute, private _router: Router, private _as: AnswerService) { }

  ngOnInit() {
    this.setCurrentUser();
    this._route.params.subscribe(params => this.question_id = params.id);
    this.getQuestion()
    console.log(this.question)
  }

  setCurrentUser(){
    this.currentUser = this._us.getCurrentUser();
    if (this.currentUser === null){
      this._router.navigateByUrl('/');
    } 
  }

  getQuestion(){
    this._qs.show(this.question_id, (question) => this.question = question)
  }

  logout() {
    this._us.logout((res)=> this._router.navigateByUrl('/'))
  }

  update(answer_id: string){
    this._as.update(answer_id, res => this.getQuestion());
  }

}
