import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pppppppp';

  name = "guest";
  // name=localStorage.getItem('user')==null?"guest":localStorage.getItem('user');
  ngOnInit(): void {
  }
  check() {
    if (localStorage.getItem('user')) {
    //  this.name = JSON.parse(localStorage.getItem('user')).Name;
      return true;
    }
    return false;
  }
 constructor( public rot: Router){
  
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