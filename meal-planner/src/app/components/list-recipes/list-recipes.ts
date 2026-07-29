import { Component, inject, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes';
import { ListElementRecipe } from '../../models/ListElementRecipe';

@Component({
  selector: 'app-list-recipes',
  imports: [],
  templateUrl: './list-recipes.html',
  styleUrl: './list-recipes.css',
})
export class ListRecipes implements OnInit {
  recipes: ListElementRecipe[] = [];
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.loadRecipes('f', 'a');
  }

  loadRecipes(searchType: string, searchQuery: string): void {
    this.recipeService.search(searchType, searchQuery).subscribe((recipes: ListElementRecipe[]) => {
      this.recipes = recipes;
    });
  }
}
