//import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/models/User';
import UserService from '../services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  arr: User[] = [];
  constructor(public userService: UserService, private router: Router) {
    this.userService.GetAllUsers().subscribe(succ => {
      this.arr = succ;
    });
  }
  name: string;
  password: string;
  isLogin: boolean = false;
  ngOnInit(): void {
  }
  login() {
    let u = new User(1, this.name, "ag", "sfg", this.password)
    this.userService.Login(u).subscribe(succ => {
      if (typeof succ === "boolean")
        if (succ == false)
          this.router.navigate(['/register'])
        else
          this.isLogin = succ;
      else {
        localStorage.setItem('userId', succ.Id + "")
        localStorage.setItem('userName', succ.Name)
        this.router.navigate(['/allRecipes'])
      }
    })

  }
}
