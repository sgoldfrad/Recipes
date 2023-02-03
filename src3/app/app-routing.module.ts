import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'allRecipes', component: AllRecipeComponent},
  { path: 'detail/:id', component: RecipeDetailsComponent },
  { path: 'editRecipe/:id', component: EditRecipeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'addRecipe', component: AddRecipeComponent },
  { path: '', component: AllRecipeComponent },
  { path: '**', component: AllRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
