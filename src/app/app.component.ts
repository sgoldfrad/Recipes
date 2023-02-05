import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'pppppppp';
  sub: Subscription;
  userName = "guest"
  ngOnInit(): void {
    console.log("ddd");
 this.userService.currentUser.next(this.userService.getFromStorage()); 
 this.sub = this.userService.currentUser.subscribe(data => {console.log(data); this.userName = data ? data.Name : "guest" })

  }
  constructor( public rot: Router, public userService: UserService){
  
 }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  // check() {
  //   if (localStorage.getItem('user')) {
  //   //  this.name = JSON.parse(localStorage.getItem('user')).Name;
  //     return true;
  //   }
  //   return false;
  // }
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
  // name=localStorage.getItem('user')==null?"guest":localStorage.getItem('user');
//   ngOnInit(): void {
//   }
//   check() {
//     if (localStorage.getItem('user')) {
//     //  this.name = JSON.parse(localStorage.getItem('user')).Name;
//       return true;
//     }
//     return false;
//   }
//  constructor( public rot: Router){
  
//  }
// addRecipe() {
//   if (localStorage.getItem('user')) {
//     this.rot.navigate(["add-recipe"]);
//     console.log(JSON.parse(localStorage.getItem('user')))
//   }
//   else
//     this.rot.navigate(["login"]);
// }

}