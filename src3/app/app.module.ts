import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { ConvertToHourPipe } from './convert-to-hour.pipe';
import { NumToStarsPipe } from './num-to-stars.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, NgModel } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input'
@NgModule({
  declarations: [
    AppComponent,
    AllRecipeComponent,
    SmallRecipeComponent,
    ConvertToHourPipe,
    NumToStarsPipe,
    LoginComponent,
    RegisterComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    LogoutComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
