import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.module";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('TEST', "it's a test", "https://i.pinimg.com/originals/b2/11/59/b21159b1346a8a5448998344d1d68f1d.jpg"),
    new Recipe('TEST2', "it's a test2", "https://i.pinimg.com/originals/b2/11/59/b21159b1346a8a5448998344d1d68f1d.jpg"),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
