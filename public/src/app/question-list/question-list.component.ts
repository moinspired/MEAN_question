import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { User } from '../user';
import { Question } from '../question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  currentUser: User = new User();
  questions: Question[];


  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
  constructor(private _us: UserService, private _router: Router, private _qs: QuestionService) { }

  ngOnInit() {
    this.setCurrentUser();
    this.getQuesions();
  }

  setCurrentUser(){
    this.currentUser = this._us.getCurrentUser();
    if (this.currentUser === null){
      this._router.navigateByUrl('/');
    } 
  }

  getQuesions(){
    this._qs.index((questions) => this.questions = questions)
  }

  logout() {
    this._us.logout((res)=> this._router.navigateByUrl('/'))
  }


}
