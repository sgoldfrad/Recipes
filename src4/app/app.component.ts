import { Component } from '@angular/core';

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
}
