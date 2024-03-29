import { recipes } from '../data/recipes.js';
import { filterAndDisplayRecipes, updateDropdownLists, initDropdownSearch } from '../scripts/utils/searchAndFilters_Logic.js';
// Récupération des recettes initiales

// Initialisation de la recherche
let currentSearchQuery = '';

function search() {
    // À l'extérieur, pendant l'initialisation
    const searchBar = document.querySelector('#searchbar');
    const searchInput = searchBar.querySelector('input');
    const searchClose = searchBar.querySelector("svg");
    filterAndDisplayRecipes(recipes);
    updateDropdownLists(recipes);
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
        filterAndDisplayRecipes(recipes);
    });

    initDropdownSearch();
}



// Fonction d'initialisation
function init() {
    search();
}

// Appel de la fonction d'initialisation après chargement du DOM
window.addEventListener('DOMContentLoaded', init);

export { currentSearchQuery }