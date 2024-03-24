import { recipes } from '../data/recipes.js';
import { displayRecipes } from '../scripts/ui/display.js';
import { getUniqueIngredients, getUniqueAppliances, getUniqueUtensils, filterByIngredient, filterByAppliance, filterByUtensil } from '../scripts/utils/filters.js';

// Récupération des recettes initiales
function getInitialRecipes() {
    return recipes;
}




// Fonction d'initialisation
function init() {
    getInitialRecipes();
    console.log("Liste de recettes", getInitialRecipes());
    getUniqueIngredients(getInitialRecipes());
    getUniqueAppliances(getInitialRecipes());
    getUniqueUtensils(getInitialRecipes());
    // Affichage initial des recettes
    displayRecipes(getInitialRecipes());

    // Filtrer les recettes par l'ingrédient "citron".
    filterByIngredient(recipes, "citron");
    // Filtrer les recettes par l'appareil "citron".
    filterByAppliance(recipes, "four");
    // Filtrer les recettes par l'ustensile "citron".
    filterByUtensil(recipes, "couteau");
}

// Appel de la fonction d'initialisation après chargement du DOM
window.addEventListener('DOMContentLoaded', init);