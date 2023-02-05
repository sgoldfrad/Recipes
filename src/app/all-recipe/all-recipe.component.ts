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
  }

  filterArr() {
    this.filterArry = this.arr;
    if (this.filterName != undefined) {
      this.flag = true;
      this.filterArry = this.arr.filter(s => s.Name.includes(this.filterName));
    }
    if (this.filterCategory != undefined && this.filterCategory != "" && this.filterCategory != "evryThing") {
      let idCategory: number = this.categoryArry.findIndex(s => s.Name == this.filterCategory);
      if (this.flag)
        this.filterArry = this.filterArry.filter(s => s.CategoryId == idCategory + 1);
      else
        this.filterArry = this.arr.filter(s => s.CategoryId == idCategory + 1);
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
    }
    else
      this.rot.navigate(["login"]);
  }

  displayFilter() {
    this.isFilter = this.isFilter == true ? false : true;
  }

  ngOnInit(): void {
    this.recipeService.getAllRecipe().subscribe(succ => {
      this.arr = succ;
      this.filterArry = succ;
    });
    this.categoryService.getAllCategory().subscribe(succ => {
      this.categoryArry = succ;
    });
  }
}