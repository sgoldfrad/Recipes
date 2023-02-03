// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { LevelPipePipe } from './level-pipe.pipe';
import { TimePipePipe } from './time-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatInputModule} from '@angular/material/input';
 import {MatToolbarModule} from '@angular/material/toolbar';
//   import {MatToolbarHarness} from '@angular/material/toolbar/testing';
//import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterComponent } from './filter/filter.component';

       
@NgModule({
  declarations: [
    AppComponent,
    AllRecipeComponent,
    SmallRecipeComponent,
    LevelPipePipe,
    TimePipePipe,
    LoginComponent,
    RegisterComponent,
    RecipeDetailsComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    FilterComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
      MatInputModule,
     MatToolbarModule,
     MatCardModule,
    // MatToolbarHarness,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }