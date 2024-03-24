import { recipes } from '../data/recipes.js';
import { getUniqueIngredients, getUniqueAppliances, getUniqueUtensils } from '../scripts/utils/filters.js';

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
}

// Appel de la fonction d'initialisation après chargement du DOM
window.addEventListener('DOMContentLoaded', init);