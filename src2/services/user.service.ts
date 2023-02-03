import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import User from "src/Models/User";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })

  export class UserService {

    constructor(public http: HttpClient) { }
    
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