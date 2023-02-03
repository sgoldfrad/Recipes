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
  count: boolean[] = [false, false, false, false, false]
  ngOnInit(): void {
    for (let i = 0; i < this.myRecipe.Level; i++)
    this.count[i] = true;
  }

}
