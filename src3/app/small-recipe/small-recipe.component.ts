import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Recipe from 'src/models/Recipe';
import RecipeService from '../services/recipe.service';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
  @Input()
  myRecipe: Recipe;
  
  count: boolean[] = [false, false, false, false, false]
  constructor() {

  }
  ngOnInit(): void {
    for (let i = 0; i < this.myRecipe.Level; i++)
      this.count[i] = true;
  }

}
