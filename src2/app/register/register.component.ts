import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/Models/User';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myUser: User = { Id: 1, Name: "", Address: "", Mail: "", Password: "1111" };


  name = "name";
  constructor(public userService: UserService, public rotname: ActivatedRoute, public rot: Router) {
    this.rotname.params.subscribe(s => { this.name = s['name']; console.log(this.name) })
    if (this.name == undefined)
      this.name = "name";
  }
  isWrongPassword: boolean = undefined
  ngOnInit(): void {
  }
  register() {
    this.userService.registerUser(this.myUser).subscribe(succ => {
      if (typeof succ === "boolean")
        this.isWrongPassword = succ;
      else {
        localStorage.setItem('user', JSON.stringify(succ));
        console.log(JSON.parse(localStorage.getItem('user')));
        this.rot.navigate(["all-recipe"]);


      }
    });
  }
}
