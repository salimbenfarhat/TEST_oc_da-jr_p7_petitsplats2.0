import { recipes } from '../data/recipes.js';
import { displayRecipes } from '../scripts/ui/display.js';
import { searchByQuery, getUniqueIngredients, getUniqueAppliances, getUniqueUtensils, filterByIngredient, filterByAppliance, filterByUtensil } from '../scripts/utils/searchAndFilters_Functions.js';
import { filterAndDisplayRecipes, updateDropdownLists } from '../scripts/utils/searchAndFilters_Logic.js';
// Récupération des recettes initiales

// Initialisation de la recherche
export let currentSearchQuery = '';


function filterRecipes(recipes) {
    // Filtrer par l'ingrédient "jus de citron"
    let filteredRecipes = recipes;
    /*filterByIngredient(recipes, "jus de citron");
    // Filtrer par l'ingrédient "lait de coco"
    filteredRecipes = filterByIngredient(filteredRecipes, "lait de coco");
    // Filtrer par l'appareil "blender"
    filteredRecipes = filterByAppliance(filteredRecipes, "blender");
    // Filtrer par l'ustensile "verres"
    filteredRecipes = filterByUtensil(filteredRecipes, "verres");
    //console.log("Recettes filtrées selon les critères donnés:", filteredRecipes);*/
    return filteredRecipes;
}

function search() {
    // À l'extérieur, pendant l'initialisation
    const searchBar = document.querySelector('#searchbar');
    const searchInput = searchBar.querySelector('input');
    const searchClose = searchBar.querySelector("svg");

    // Initialiser l'état visuel de la croix
    searchClose.style.display = searchInput.value ? "block" : "none";

    searchInput.addEventListener('input', (e) => {
        const searchValue = e.target.value;
        searchClose.style.display = searchValue ? "block" : "none";
        
        currentSearchQuery = searchValue; 
        console.log("Step 1 : currentSearchQuery:", currentSearchQuery);
        // Appel de filterAndDisplayRecipes avec la valeur actuelle de la barre de recherche
        filterAndDisplayRecipes(currentSearchQuery);
    });

    searchClose.addEventListener("click", () => {
        searchInput.value = "";
        searchClose.style.display = "none";
        // Après avoir effacé le champ de recherche, réaffichez toutes les recettes ou appliquez le filtre par défaut.
        displayRecipes(recipes);
    });
}



// Fonction d'initialisation
function init() {

    // Affichage initial des recettes
    displayRecipes(recipes);
/*
    // Filtrer les recettes par l'ingrédient "citron".
    filterByIngredient(recipes, "citron");
    // Filtrer les recettes par l'appareil "citron".
    filterByAppliance(recipes, "four");
    // Filtrer les recettes par l'ustensile "citron".
    filterByUtensil(recipes, "couteau");*/

    // Afficher les recettes filtreées
    filterRecipes(recipes);

    updateDropdownLists(recipes);

    search();
}

// Appel de la fonction d'initialisation après chargement du DOM
window.addEventListener('DOMContentLoaded', init);