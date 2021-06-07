import { Component, OnInit } from '@angular/core';
import {Ingredient} from "./ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [ new Ingredient("Pommes", 5), new Ingredient("Poire", 2)];

  constructor() { }

  ngOnInit(): void {
  }

}
