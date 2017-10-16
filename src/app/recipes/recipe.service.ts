import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Estofado',
      'Best dish ever.',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Potato', 2)
      ])
    , new Recipe('Burger',
      'This is a big burger.',
      'http://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Hero-Cheeseburger.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // slice returns an exact copy of the array
    return this.recipes.slice();
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
