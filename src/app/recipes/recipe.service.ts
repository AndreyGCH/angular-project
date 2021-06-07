import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Test', 'https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg', [
            new Ingredient('meat', 1),
            new Ingredient('French Fries', 20),
        ]),
        new Recipe('Another 2 Test Recipe', 'Test', 'https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg', [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
        ]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}