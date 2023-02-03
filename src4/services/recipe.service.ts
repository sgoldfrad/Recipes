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
    
    // getAllRecipe() {
    //   return this.http.get<Recipe[]>("https://localhost:44336/api/recipe/GetAllRecipes"	);
    // } 

    getRecipeById(id: number) {
      return this.http.get<Recipe>(`${this.routeUrl}/GetRecipeById/${id}`);  //מה ההבדל בין האוביקט ששולח לאוביקט שמוחזר       
    }  


    getRecipesByCategoryId(id: number) {
      return this.http.get<Recipe>(`${this.routeUrl}/GetRecipesByCategoryId/${id}`);       
    } 


    addRecipe(r: Recipe) {
      return this.http.post<Recipe>(`${this.routeUrl}/AddRecipe`,r);
    }

    // deleteRecipe(id: number) {
    //   return this.http.delete<Recipe>(`${this.routeUrl}/${id}`);
    // }

    putRecipe(r: Recipe) {
      return this.http.put<Recipe>(`${this.routeUrl}/UpdateRecipe/${r.Id}`, r);//למה צריך גם לשלוח את באינקס הרי ישל ואת זה בתוך האוביקט
    }
  }