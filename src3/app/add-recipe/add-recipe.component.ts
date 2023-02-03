import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Layer from 'src/models/Layer';
import Recipe from 'src/models/Recipe';
import RecipeService from '../services/recipe.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  name: string;
  img: string;
  cat: number;
  level: number;
  comp: string;
  time: number;
  myRecipe: Recipe;
  allLayer: Layer[] = [];
  components: string[] = [];
  prep: string;
  prearation: string[] = [];
  userId: number;
  description:string;
  constructor(public recipeService: RecipeService, private route: Router) {

  }

  ngOnInit(): void {
  }
  newLayer() {
    this.allLayer.push(new Layer(this.components,this.description));
    this.components = [];
    this.description=" "
  }
  newComp() {
    this.components.push(this.comp);
    this.comp = " ";
  }
  newPrep() {
    this.prearation.push(this.prep);
    this.prep = " ";
  }
  addRecipe() {
    let d = new Date(Date.now());
    this.userId = parseInt(localStorage.getItem('userId'));
    this.myRecipe = new Recipe(1010, this.name, this.cat, this.time, this.level, d, this.allLayer, this.prearation, this.userId, '../../assets/images/' + this.img + '.jpg', false)
    this.recipeService.AddRecipe(this.myRecipe).subscribe(succ => {
      console.log(succ);
    })
    this.route.navigate(['allRecipes']);
  }
}
