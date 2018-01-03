import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }
  
  index(callback){
    this._http.get('/questions').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  create(question, callback) {
    this._http.post('/questions', question).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  show(id: string, callback) {
    // console.log("id from service controller "+id)
    this._http.get(`/questions/${id}`).subscribe(
      res => {callback(res.json())},
      err => console.log(err)
    )
  }
}
