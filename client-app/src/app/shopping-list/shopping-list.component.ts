import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Ingredient A", 15),
    new Ingredient("Ingredient B", 25),
    new Ingredient("Ingredient C", 5),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
