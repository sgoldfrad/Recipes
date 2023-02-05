import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import Recipe from "src/Models/Recipe";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public http: HttpClient) { }

  routeUrl = `${environment.baseUrl}/recipe`;

  getAllRecipe() {
    return this.http.get<Recipe[]>(`${this.routeUrl}/GetAllRecipes`);
  }

  getRecipeById(id: number) {
    return this.http.get<Recipe>(`${this.routeUrl}/GetRecipeById/${id}`);  //מה ההבדל בין האוביקט ששולח לאוביקט שמוחזר       
  }

  getRecipesByCategoryId(id: number) {
    return this.http.get<Recipe>(`${this.routeUrl}/GetRecipesByCategoryId/${id}`);
  }

  addRecipe(r: Recipe) {
    return this.http.post<Recipe>(`${this.routeUrl}/AddRecipe`, r);
  }

  updateRecipe(r: Recipe) {
    console.log(r);
    return this.http.put<Recipe>(`${this.routeUrl}/UpdateRecipe`, r)
  }
}
