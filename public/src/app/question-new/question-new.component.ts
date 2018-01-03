import { Component, OnInit } from '@angular/core';
import { NewQuestion } from '../new-question';
import { User } from '../user';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {
  newQuestion : NewQuestion = new NewQuestion()
  errors: string[]= [];
  currentUser: User = new User();


  constructor(private _qs: QuestionService, private _router: Router, private _us: UserService) { }

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    this.currentUser = this._us.getCurrentUser();
    if (this.currentUser === null){
      this._router.navigateByUrl('/');
    } 
  }

  createPoll(){
    this.errors = [];
    if(this.newQuestion.question == undefined){
      this.errors.push('Question not not be empty.')
      console.log('Question not not be empty')
    }
    else if(this.newQuestion.question.length < 3 || this.newQuestion.question.length < 3){
      this.errors.push('Options must be at least three characters.')
    }else{
      this._qs.create(this.newQuestion, (question) => {
        if(question.errors){
          for(const key of Object.keys(question.errors)){
            const error = question.errors[key];
            this.errors.push(error.message);
          }
        }else {
          this._router.navigateByUrl('/dashboard')
        }
      })
    }
    }


}
