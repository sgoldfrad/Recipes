import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/Models/User';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myUser: User = { Id: 1, Name: "", Address: "", Mail: "", Password: "1111" };
  isWrongPassword: boolean;

  constructor(public userService: UserService, public rot: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.isWrongPassword)
    this.userService.loginUser(this.myUser).subscribe(succ => {
      if (typeof succ === "boolean") {
        this.isWrongPassword = succ;
        if (this.isWrongPassword == false)
          this.rot.navigate(["register", this.myUser.Name]);
      }
      else {
        this.rot.navigate(["all-recipe"]);
        localStorage.setItem('user', JSON.stringify(succ));
      }
      console.log(JSON.parse(localStorage.getItem('user')));
    });
  }
}