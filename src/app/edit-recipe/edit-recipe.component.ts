import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Category from 'src/Models/Category';
import Recipe from 'src/Models/Recipe';
import { CategoryService } from 'src/services/category.service';
import { RecipeService } from 'src/services/recipe.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  recipe: Recipe;
  id = null;
  categoryArry: Category[];
  constructor(public recipeService: RecipeService, categoryService:CategoryService, public rotId: ActivatedRoute, public rot: Router) {
    this.rotId.params.subscribe(s => {
      this.id = s['id'];
      console.log(this.id)
    })
    this.recipeService.getRecipeById(this.id).subscribe(succ => {
      this.recipe = succ;
    });
    categoryService.getAllCategory().subscribe(succ => {
      this.categoryArry = succ;
    })
  }
  // recipe: Recipe = { Id: null, Name: null, CategoryId: null, PreparationTimeMinute: null, Level: null, AddDate: null, Layers: null, Preparation: null, UserId: null, Image: null, IsDisplay: null }
  editRecipe() {      console.log("kkkkkk");

    this.recipeService.updateRecipe(this.recipe).subscribe(succ => {
      this.recipe = succ;
      this.rot.navigate(['all-recipe'])
    });

  }

  ngOnInit(): void {
  }

}
