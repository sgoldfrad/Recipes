import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/models/User';
import UserService from '../services/user-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: string;
  password: string;
  mail:string;
  adress:string;
  isRegister: boolean;
  constructor(public userService: UserService, public ActivatedR: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
  }
  regist() {
    let u: User = new User(1, this.name, this.adress, this.mail, this.password);
    this.userService.Register(u).subscribe(succ => {
      if (typeof succ === "boolean")
        this.isRegister = succ;
      else {
        localStorage.setItem('userId', succ.Id + "")
        this.router.navigate(['/allRecipes'])
      }
    })

  }
}
