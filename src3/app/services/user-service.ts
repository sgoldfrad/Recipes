import { HttpClient, HttpEvent, HttpResponse, HttpSentEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import User from "src/models/User";
@Injectable({
    providedIn: 'root'
})
export default class UserService {
    constructor(public http: HttpClient) { }
    routeUrl = `${environment.baseUrl}/user`;
    GetAllUsers() {
        return this.http.get<User[]>(`${this.routeUrl}/GetAllUsers`)
    }
    GetUserById(id: number) {
        return this.http.get<User>(`${this.routeUrl}/GetUserById/${id}`)
    }
    Login(u: User) {
        return this.http.post<User|boolean>(`${this.routeUrl}/Login`, u)
    }
    Register(u: User) {
        return this.http.post<User|boolean>(`${this.routeUrl}/Register`, u)
    }
}