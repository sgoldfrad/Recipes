import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/Models/User';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myUser: User = { Id: null, Name: null, Address: null, Mail: null, Password: null };
  name = "name";
  isWrongPassword: boolean = undefined;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public userService: UserService, public rotname: ActivatedRoute, public rot: Router) {
    if (this.name == undefined)
      this.name = "name";
  }

  register() {
    this.userService.registerUser(this.myUser).subscribe(succ => {
      if (typeof succ === "boolean")
        this.isWrongPassword = succ;
      else {
        localStorage.setItem('user', JSON.stringify(succ));
        this.rot.navigate(["all-recipe"]);
      }
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'דוא"ל זהו שדה חובה';
    }

    return this.email.hasError('email') ? 'מייל לא תקין' : '';
  }
  ngOnInit(): void {
    this.rotname.params.subscribe(s => { this.name = s['name']; console.log(this.name) })
  }
}
