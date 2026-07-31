import { Component, Input } from '@angular/core';
import { ListElementRecipe } from '../../models/ListElementRecipe';

@Component({
  selector: 'app-recipe-link',
  imports: [],
  templateUrl: './recipe-link.component.html',
  styleUrl: './recipe-link.component.css',
})
export class RecipeLinkComponent {
  @Input() recipe!: ListElementRecipe;
}
