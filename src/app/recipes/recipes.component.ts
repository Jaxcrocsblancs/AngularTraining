import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipes-list/recipe.module";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectRecipe : Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
