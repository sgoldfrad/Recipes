import { ASTWithSource } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Recipe from 'src/Models/Recipe';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {
  arr: Recipe[] = [];
  filterName: string;
  filterCategory: number;
  filterArry: Recipe[];
  filterPreperationTimeInMinute: number;
  isFilter = false;
  constructor(public recipeService: RecipeService, public rot: Router) {
    this.recipeService.getAllRecipe().subscribe(succ => {
      this.arr = succ;
      this.filterArry = succ;
    });
  }
  filterArr() {
    // if (this.filterName != undefined && this.filterName != "")
    //   if (this.filterCategory != undefined)
    //     if (this.filterPreperationTimeInMinute != undefined)
    //       this.filterArry = this.arr.filter(s => s.Name.includes(this.filterName) && s.CategoryId == this.filterCategory && s.PreparationTimeInMinute == this.filterPreperationTimeInMinute);
    //     else
    //       this.filterArry = this.arr.filter(s => s.Name.includes(this.filterName) && s.CategoryId == this.filterCategory);
    //   else
    //     if (this.filterPreperationTimeInMinute != undefined)
    //       this.filterArry = this.arr.filter(s => s.Name.includes(this.filterName) && this.filterPreperationTimeInMinute != undefined);
    //     else
console.log(this.filterPreperationTimeInMinute);

    //     if (this.filterName != undefined && this.filterName != "" && this.filterCategory != undefined)
    //         this.filterArry = this.arr.filter(s => s.Name.includes(this.filterName) && s.CategoryId == this.filterCategory);
    // if (this.filterName != undefined && this.filterName != "" && this.filterCategory != undefined)
    //   this.filterArry = this.arr.filter(s => s.Name.includes(this.filterName) && s.CategoryId == this.filterCategory);
    // if (this.filterName != undefined && this.filterName != "" && this.filterCategory != undefined && this.filterPreperationTimeInMinute != undefined)
    if (this.filterName != undefined && this.filterName != "") 
      this.filterArry = this.arr.filter(s => s.Name.includes(this.filterName));
    if (this.filterCategory != undefined)
    {console.log("category")
        this.filterArry = this.filterArry.filter(s => s.CategoryId==this.filterCategory);}
    if (this.filterPreperationTimeInMinute != undefined)
    
  {console.log("preparation")
         this.filterArry = this.filterArry.filter(s => s.PreparationTimeInMinute>this.filterPreperationTimeInMinute);
   } 
  }
  showDetails(id) {
    this.rot.navigate(["recipe-details", id]);
  }
  addRecipe() {
    if (localStorage.getItem('user')) {
      this.rot.navigate(["add-recipe"]);
      console.log(JSON.parse(localStorage.getItem('user')))
    }
    else
      this.rot.navigate(["login"]);
  }
  displayFilter() {
    this.isFilter = this.isFilter == true ? false : true;
  }
  ngOnInit(): void {
  }
}
