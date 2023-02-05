import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import User from "src/Models/User";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })

  export class UserService {

    currentUser = new BehaviorSubject<User>(null);

    constructor(public http: HttpClient) { }

    setInStorage(user) {
      console.log("ssss")
      localStorage.setItem("currentUser", JSON.stringify(user));
    }

    getFromStorage() {
      let u = localStorage.getItem("currentUser");
      if (!u)
        return null;
        console.log(JSON.parse(u));
      return JSON.parse(u);
    }
    
    removeFromStorage() {
      localStorage.removeItem("currentUser");
    }

    
    routeUrl = `${environment.baseUrl}/user`;
    getAllUser() {
      return this.http.get<User[]>(`${this.routeUrl}/GetAllUsers`);
    }
    
    getUserById(id: number) {
      return this.http.get<User>(`${this.routeUrl}/GetUserById/${id}`) ;      
    }  
    loginUser(r: User|boolean) {
        return this.http.post<User>(`${this.routeUrl}/Login`,r);
    }
      
    registerUser(r: User) {
        return this.http.post<User>(`${this.routeUrl}/Register`,r);
    }

  }