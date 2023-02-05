import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Category from 'src/Models/Category';
import Layer from 'src/Models/Layer';
import Recipe from 'src/Models/Recipe';
import { CategoryService } from 'src/services/category.service';
import { RecipeService } from 'src/services/recipe.service';
import { NG_VALIDATORS, Validator, AbstractControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  categoryArry: Category[];
  preperationIndex = 0;
  layerIndex = 0;
  componenetIndex = 0;
  layer: Layer = new Layer(null, []);
  recipe: Recipe = { Id: null, Name: null, CategoryId: null, PreparationTimeInMinute: null, Level: null, AddDate: null, Layers: [], Preparation: [], UserId: JSON.parse(localStorage.getItem('user')).Id, Image: "5.jpg", IsDisplay: null }
  
  constructor(public recipeService: RecipeService, public categoryService: CategoryService, public rot: Router) {
    categoryService.getAllCategory().subscribe(succ => {
      this.categoryArry = succ;
    })
  }

  addRecipe(myForm) {
    console.log(this.recipe);
    console.log(myForm);
     this.recipeService.addRecipe(this.recipe).subscribe(succ => {
      this.recipe = succ;
      this.rot.navigate(['all-recipe'])//?why
      console.log(succ);
    });
  }
  
  addPreperation() {
    this.preperationIndex++;
  }
  addLayer() {
    this.layerIndex++;
    this.componenetIndex = 0;
    this.recipe.Layers.push(this.layer);
    this.layer=new Layer(null, []);
    console.log(this.recipe.Layers);

  }
  addComponenet() {
    this.componenetIndex++;
  }
  cancel(){
    this.rot.navigate(['all-recipe'])
  }
  ngOnInit(): void {
  }
}
// [{Description:null,Components:[null]}]