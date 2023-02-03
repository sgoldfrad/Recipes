import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import Recipe from "src/models/Recipe";
@Injectable({
    providedIn: 'root'
})
export default class RecipeService {
    constructor(public http: HttpClient) { }
    routeUrl = `${environment.baseUrl}/recipe`;
    GetAllRecipes() {
        return this.http.get<Recipe[]>(`${this.routeUrl}/GetAllRecipes`)
    }
    GetRecipeById(id: number) {
        return this.http.get<Recipe>(`${this.routeUrl}/GetRecipeById/${id}`)
    }
    AddRecipe(r: Recipe) {
        return this.http.post<Recipe>(`${this.routeUrl}/AddRecipe`, r)
    }
    UpdateRecipe(r:Recipe){
        console.log(r);
        return this.http.put<Recipe>(`${this.routeUrl}/UpdateRecipe`,r)
    }
    GetRecipesByCategoryId(idCat:number){
        return this.http.get<Recipe[]>(`${this.routeUrl}/GetRecipesByCategoryId/${idCat}`)
    }
    
}