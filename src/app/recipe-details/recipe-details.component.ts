import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import Recipe from 'src/Models/Recipe';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  
  recipe: Recipe;
  id = null;

  constructor(public recipeService: RecipeService, public rotId: ActivatedRoute, public rot: Router) {
    this.rotId.params.subscribe(s => {
      this.id = s['id'];
      console.log(this.id)
    })
    this.recipeService.getRecipeById(this.id).subscribe(succ => {
      this.recipe = succ;
      console.log(this.recipe.PreparationTimeInMinute)
    });
  
  }

  check() {
    if (localStorage.getItem('user'))
      this.rot.navigate(["edit-recipe",this.recipe.Id]);
    else
      this.rot.navigate(["login"]);
  }

  ngOnInit(): void {
  }

}
