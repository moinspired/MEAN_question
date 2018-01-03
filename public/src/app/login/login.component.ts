import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = new User();
  errors: string[] = [];

  constructor(private _router: Router, private _us: UserService) { }

  ngOnInit() {
    // this.newUser.name = 'motuma';
    // this.createUser();
  }

  createUser(){
    this.errors = [];

    this._us.create(this.newUser, (user) => {
      if(user.errors){
        for(const key of Object.keys(user.errors)){
          const error = user.errors[key];
          this.errors.push(error.message);
        }
      }else {
        this._router.navigateByUrl('/dashboard')
      }
    })
  }

}
