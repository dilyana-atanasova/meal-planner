import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListRecipes } from "./components/list-recipes/list-recipes";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListRecipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meal-planner');
}
