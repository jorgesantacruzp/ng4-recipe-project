import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Estofado',
      'Best dish ever.',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
    ,new Recipe('Burger',
      'This is a big burger.',
      'http://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Hero-Cheeseburger.png')
  ];

  getRecipes() {
    // slice returns an exact copy of the array
    return this.recipes.slice();
  }
}
