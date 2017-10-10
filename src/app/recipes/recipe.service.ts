import {Recipe} from "./recipe.model";

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test.','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
    ,new Recipe('A Test Recipe TWO','This is simply a test TWO.','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
    ,new Recipe('A Test Recipe THREE','This is simply a test THREE.','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];

  getRecipes() {
    // slice returns an exact copy of the array
    return this.recipes.slice();
  }
}
