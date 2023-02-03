import { Component, Input, OnInit } from '@angular/core';
import Recipe from 'src/Models/Recipe';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {

  constructor() { }
  @Input()
  myRecipe: Recipe;
  ngOnInit(): void {
  }

}
