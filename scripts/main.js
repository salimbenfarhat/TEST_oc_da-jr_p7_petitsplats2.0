import { recipes } from '../data/recipes.js';
import { displayRecipes } from '../scripts/ui/display.js';
import { getUniqueIngredients, getUniqueAppliances, getUniqueUtensils, filterByIngredient, filterByAppliance, filterByUtensil } from '../scripts/utils/filters.js';

// Récupération des recettes initiales
function getInitialRecipes() {
    return recipes;
}

function filterRecipes(recipes) {
    // Filtrer par l'ingrédient "jus de citron"
    let filteredRecipes = filterByIngredient(recipes, "jus de citron");
    // Filtrer par l'ingrédient "lait de coco"
    filteredRecipes = filterByIngredient(filteredRecipes, "lait de coco");
    // Filtrer par l'appareil "blender"
    filteredRecipes = filterByAppliance(filteredRecipes, "blender");
    // Filtrer par l'ustensile "verres"
    filteredRecipes = filterByUtensil(filteredRecipes, "verres");
    console.log("Recettes filtrées selon les critères donnés:", filteredRecipes);
    return filteredRecipes;
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

    // Afficher les recettes filtreées
    filterRecipes(getInitialRecipes());
}

// Appel de la fonction d'initialisation après chargement du DOM
window.addEventListener('DOMContentLoaded', init);