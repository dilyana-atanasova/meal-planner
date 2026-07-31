import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes';
import { ListElementRecipe } from '../../models/ListElementRecipe';
import { RecipeLinkComponent } from '../recipe-link.component/recipe-link.component';

@Component({
  selector: 'app-list-recipes',
  imports: [RecipeLinkComponent],
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
