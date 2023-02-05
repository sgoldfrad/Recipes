import { ASTWithSource } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Recipe from 'src/Models/Recipe';
import { RecipeService } from 'src/services/recipe.service';
import { CategoryService } from 'src/services/category.service';
import Category from 'src/Models/Category';
@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {
  arr: Recipe[] = [];
  filterName: string;
  filterCategory;
  filterArry: Recipe[];
  filterPreperationTimeInMinute;
  isFilter = false;
  flag = false;
  categoryArry: Category[];

  constructor(public recipeService: RecipeService, public categoryService: CategoryService, public rot: Router) {
    this.recipeService.getAllRecipe().subscribe(succ => {
      this.arr = succ;
      this.filterArry = succ;
    });
    categoryService.getAllCategory().subscribe(succ => {
      this.categoryArry = succ;
    });
  }
  filterArr() {
    console.log(this.filterCategory)
    this.filterArry = this.arr;
    // console.log(" time" + this.filterPreperationTimeInMinute + " name" + this.filterName + "cat" + this.filterCategory +"arr"+ this.arr);
    if (this.filterName != undefined) {
      // console.log(this.filterArr);
      this.flag = true;
      this.filterArry = this.arr.filter(s => s.Name.includes(this.filterName));
    }
    if (this.filterCategory != undefined && this.filterCategory != ""&&this.filterCategory!="evryThing") {
      let idCategory:number=this.categoryArry.findIndex(s=>s.Name==this.filterCategory);
      console.log(idCategory)
      if (this.flag)
        this.filterArry = this.filterArry.filter(s => s.CategoryId == idCategory+1);
      else
        this.filterArry = this.arr.filter(s => s.CategoryId == idCategory+1);
      this.flag = true;
    }
    if (this.filterPreperationTimeInMinute != undefined && this.filterPreperationTimeInMinute != "") {
      if (this.flag)
        this.filterArry = this.filterArry.filter(s => s.PreparationTimeInMinute > this.filterPreperationTimeInMinute);
      else
        this.filterArry = this.arr.filter(s => s.PreparationTimeInMinute < this.filterPreperationTimeInMinute);
    }
    this.flag = false;
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
