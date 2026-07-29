export class ListElementRecipe {
  RecipeName: string;
  RecipeLink: string;
  PictureUrl: string;

  constructor(recipeName: string, recipeLink: string, pictureUrl: string) {
    this.RecipeName = recipeName;
    this.RecipeLink = recipeLink;
    this.PictureUrl = pictureUrl;
  }
}
