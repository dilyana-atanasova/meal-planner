import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListRecipes } from "./components/list-recipes/list-recipes";
import { SearchRecipesComponent } from './components/search-recipes.component/search-recipes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListRecipes, SearchRecipesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meal-planner');
}
