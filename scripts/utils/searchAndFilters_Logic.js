// searchAndFilter.js
import { recipes } from '../../data/recipes.js';
import { displayRecipes } from '../ui/display.js';
import { getUniqueIngredients, getUniqueAppliances, getUniqueUtensils, searchByQuery, filterByIngredient, filterByAppliance, filterByUtensil } from './searchAndFilters_Functions.js';

function filterAndDisplayRecipes(searchQuery, ingredientFilter, applianceFilter, utensilFilter) {
    let filteredRecipes = recipes;

      // Vérification si la recherche est activée et contient au moins 3 caractères
    if (searchQuery && searchQuery.length > 2) {
      console.log("search query:", searchQuery);
        // Logique de recherche par nom, description, etc.
        filteredRecipes = searchByQuery(filteredRecipes, searchQuery);
    } else {
        // Si moins de 3 caractères sont entrés, vous pourriez choisir d'afficher toutes les recettes ou de ne rien faire.
        filteredRecipes = recipes;
    }
  
    if (ingredientFilter) {
      filteredRecipes = filterByIngredient(filteredRecipes, ingredientFilter);
    }
  
    if (applianceFilter) {
      filteredRecipes = filterByAppliance(filteredRecipes, applianceFilter);
    }
  
    if (utensilFilter) {
      filteredRecipes = filterByUtensil(filteredRecipes, utensilFilter);
    }
  
    displayRecipes(filteredRecipes);
    // Mettre à jour les listes des filtres en fonction des recettes filtrées
    updateDropdownLists(filteredRecipes);
}

function updateDropdownLists(recipes) {
    const ingredients = getUniqueIngredients(recipes);
    const appliances = getUniqueAppliances(recipes);
    const utensils = getUniqueUtensils(recipes);
  
    updateDropdownList(ingredients, 'ingredient');
    updateDropdownList(appliances, 'appliance');
    updateDropdownList(utensils, 'utensil');
  }

function updateDropdownList(items, type) {
    const listElement = document.getElementById(`${type}`);
    listElement.innerHTML = ''; // Vider la liste actuelle
    items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      listElement.appendChild(listItem);
    });
}

export { filterAndDisplayRecipes, updateDropdownLists, updateDropdownList };