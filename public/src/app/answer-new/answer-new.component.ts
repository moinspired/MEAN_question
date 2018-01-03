import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { User } from '../user';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from '../answer.service';
import { Answer } from '../answer';

@Component({
  selector: 'app-answer-new',
  templateUrl: './answer-new.component.html',
  styleUrls: ['./answer-new.component.css']
})
export class AnswerNewComponent implements OnInit {

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


  createAnswer(){
      this._as.create(this.answer, this.question_id, (answer) => {
      if(answer.errors){
        for(const key of Object.keys(answer.errors)){
          const error = answer.errors[key];
          console.log(error)
        }
      }else {
        this._router.navigateByUrl('/show/question/'+this.question_id)
      }
    })
  }
}
