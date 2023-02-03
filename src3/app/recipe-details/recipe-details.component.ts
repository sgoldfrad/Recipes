import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Recipe from 'src/models/Recipe';
import CategoryService from '../services/category.service';
import RecipeService from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  myRecipe: Recipe;
  id: number;
  iconImage: string;
  user: boolean;
  count: boolean[] = [false, false, false, false, false]
  constructor(public ActivatedR: ActivatedRoute, public recipeService: RecipeService, public categoryService: CategoryService, private route: Router) {
    this.ActivatedR.params.subscribe(param => {
      this.id = +param['id'];
      this.recipeService.GetRecipeById(this.id).subscribe(succ => {
        this.myRecipe = succ;
        for (let i = 0; i < this.myRecipe.Level; i++)
          this.count[i] = true;
        if (localStorage.getItem('userId') == succ.UserId + '')
          this.user = true;
        this.categoryService.GetCategoryById(this.myRecipe.CategoryId).subscribe(succ => {
          this.iconImage = succ.Icon;
        });
      });
    });
  }
  loadEditRecipe() {
    this.route.navigate([`editRecipe/${this.myRecipe.Id}`])
  }
  ngOnInit(): void {

  }
}

