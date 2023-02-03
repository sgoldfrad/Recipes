import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import Category from 'src/Models/Category';
@Injectable({
    providedIn: 'root'
  })
  export class CategoryService {

    constructor(public http: HttpClient) { }
    
    routeUrl = `${environment.baseUrl}Category`;
    getAllCategory() {
      return this.http.get<Category[]>(`${this.routeUrl}/GetAllCategories`);
    }

    getCategoryById(id: number) {
      return this.http.get<Category>(`${this.routeUrl}/GetCategoryById/${id}`);      
    }  
  }