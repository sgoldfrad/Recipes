import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Layer from 'src/models/Layer';
import Recipe from 'src/models/Recipe';
import RecipeService from '../services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  name: string;
  img: string;
  cat: number;
  level: number;
  comp: string;
  time: number;
  myRecipe: Recipe;
  components: string[] = [];
  prep: string;
  prearation: string[] = [];
  userId: number;
  description:string;
  constructor(public ActivatedR: ActivatedRoute, public recipeService: RecipeService, private route: Router,) {
    this.ActivatedR.params.subscribe(param => {
      this.recipeService.GetRecipeById(param['id']).subscribe(succ => {
        this.myRecipe = succ;
      })
    })
  }

  ngOnInit(): void {
  }
  newLayer() {
    this.myRecipe.Layers.push(new Layer(this.components,this.description));
    this.description=" "
  }
  newComp(layer:Layer) {
    let i = this.myRecipe.Layers.indexOf(layer);
    this.myRecipe.Layers[i].Components.push(this.comp)
    this.comp = " ";
  }
  deleteComp(layer:Layer,comp:string){
    let i = this.myRecipe.Layers.indexOf(layer);
    let j=this.myRecipe.Layers[i].Components.indexOf(comp);
    this.myRecipe.Layers[i].Components.splice(j,1);
  }
  newPrep() {
    this.myRecipe.Preparation.push(this.prep)
    this.prep = " ";
  }
  deletePrep(s: string) {
    let i = this.myRecipe.Preparation.indexOf(s);
    this.myRecipe.Preparation.splice(i, 1);
  }
  addRecipe() {
    let d = new Date(Date.now());
    // this.myRecipe.AddDate=d;
    // this.myRecipe.Name=this.name;
    // this.myRecipe.Image=this.img;
    // this.myRecipe.CategoryId=this.cat;
    // this.myRecipe.PreparationTimeInMinute=this.time;
    // this.myRecipe.Level=this.level;
    this.recipeService.UpdateRecipe(this.myRecipe).subscribe(succ => {
      console.log(succ);
    })
    this.route.navigate(['allRecipes']);
  }
}
