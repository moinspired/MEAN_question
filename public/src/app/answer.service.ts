import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AnswerService {

  
  constructor(private _http: Http) { }

  create(answer, question_id , callback) {
    this._http.post('/answers/'+ question_id, answer).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }


  show(id: string, callback){
    this._http.get(`answers/${id}`, {}).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
  
  update(id: string, callback){
    this._http.put(`answers/${id}`, {}).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
}
