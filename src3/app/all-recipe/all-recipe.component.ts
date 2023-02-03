import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Recipe from 'src/models/Recipe';
import RecipeService from '../services/recipe.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {
  arr: Recipe[] = [];
  user: boolean;
  constructor(public recipeService: RecipeService, private router: Router) {
    this.recipeService.GetAllRecipes().subscribe(succ => {
      this.arr = succ;
      if (localStorage.getItem('userId') != null)
        this.user = true;
    });
  }
  ngOnInit(): void {
  }
  loadRecipe(id: number) {
    if (this.user)
      this.router.navigate([`detail/${id}`])
  }
 
}
