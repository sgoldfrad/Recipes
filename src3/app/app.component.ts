import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = "אורח";
  ifNotGuest() {
    if (localStorage.getItem('userId') != null) {
      this.userName = localStorage.getItem('userName');
      return true;
    }
    return false;
  }
  title = 'lesson8';

}
