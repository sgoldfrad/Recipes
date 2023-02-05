import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'pppppppp';
  sub: Subscription;
  userName = "guest"

  constructor(public rot: Router, public userService: UserService) {
  }

  ngOnInit(): void {
    console.log("ddd");
    this.userService.currentUser.next(this.userService.getFromStorage());
    this.sub = this.userService.currentUser.subscribe(data => { console.log(data); this.userName = data ? data.Name : "guest" })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  logOut() {
    this.userService.currentUser.next(null);
    this.userService.removeFromStorage();
  }

  addRecipe() {
    if (localStorage.getItem('user')) {
      this.rot.navigate(["add-recipe"]);
      console.log(JSON.parse(localStorage.getItem('user')))
    }
    else
      this.rot.navigate(["login"]);
  }
}