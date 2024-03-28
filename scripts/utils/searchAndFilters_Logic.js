// searchAndFilter.js
import { recipes } from '../../data/recipes.js';
import { currentSearchQuery } from '../main.js';
import { displayRecipes } from '../ui/display.js';
import { getUniqueIngredients, getUniqueAppliances, getUniqueUtensils, searchByQuery, filterByIngredient, filterByAppliance, filterByUtensil } from './searchAndFilters_Functions.js';
import { searchRecipesWithLoops, searchRecipesWithFunctionalProgramming } from './searchFunctions.js';
import { normalizeElement } from './helpers.js';

function filterAndDisplayRecipes(searchQuery, selectedElement) {
  let filteredRecipes = [...recipes];
      // Vérification si la recherche est activée et contient au moins 3 caractères
      if (searchQuery && typeof searchQuery === 'string' && searchQuery.length > 2) {
        // Appelle la fonction de recherche fonctionnelle
        /*console.log("results with functional programming:", searchRecipesWithFunctionalProgramming(filteredRecipes, searchQuery));
        console.log("results with loops:", searchRecipesWithLoops(filteredRecipes, searchQuery));*/
        // Logique de recherche par nom, description, etc.
        filteredRecipes = searchByQuery(filteredRecipes, searchQuery);
        console.log("Recettes filtrées apres 3 chars:", filteredRecipes);
        
    } else {
        // Si moins de 3 caractères sont entrés, vous pourriez choisir d'afficher toutes les recettes ou de ne rien faire.
        filteredRecipes = recipes;
    }

  
    displayRecipes(filteredRecipes, searchQuery, selectedElement);
    // Mettre à jour les listes des filtres en fonction des recettes filtrées
    //updateTotalRecipesCount(filteredRecipes.length);
    updateTotalRecipesCount(filteredRecipes.length);
    updateDropdownLists(filteredRecipes);
}

function updateTotalRecipesCount(count) {
  const totalRecipesElement = document.getElementById('totalRecipes');
  let totalRecipesText;
  totalRecipesText = count === 0 ? 'Aucune recette' : (count === 1 ? '1 recette' : `${count} recettes`)

  if (totalRecipesElement) {
      totalRecipesElement.textContent = totalRecipesText;

  }
}

function createBadge(elementDropdownList, keyword) {
  const badgesContainer = document.getElementById('badgesContainer');
  const badge = document.createElement('div');
  badge.classList.add('badge');
  badge.textContent = keyword;
  badge.innerHTML = `${elementDropdownList} 
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 5px; cursor: pointer;">
  <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  badgesContainer.appendChild(badge);

  // Optionnel: Ajouter un bouton pour supprimer le badge
  badge.querySelector('svg').onclick = function() { badgesContainer.removeChild(badge); };

  // Mettre à jour les résultats de recherche
  filterAndDisplayRecipes(keyword);
}

function updateDropdownLists(recipes) {
    const ingredients = getUniqueIngredients(recipes);
    const appliances = getUniqueAppliances(recipes);
    const utensils = getUniqueUtensils(recipes);
  
    updateDropdownList(ingredients, 'ingredient');
    updateDropdownList(appliances, 'appliance');
    updateDropdownList(utensils, 'utensil');

    const ingredientList = document.getElementById('ingredient');
    const applianceList = document.getElementById('appliance');
    const utensilList = document.getElementById('utensil');

    const populateList = (listElement, items, itemType) => {
      listElement.innerHTML = '';
      items.forEach(item => { 
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.innerHTML += `
          <span class="svg-icon" style="display:none;">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.5" cy="8.5" r="8.5" fill="black"/>
            <path d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11" stroke="#FFD15B" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        `;
        listElement.appendChild(listItem);


      // Gestion du clic sur les éléments de la liste
        listItem.addEventListener('click', (e) => {
          const selectedElement = e.target.textContent.trim();

          
    // Appel direct de filterAndDisplayRecipes avec le bon argument.
    filterAndDisplayRecipes(currentSearchQuery, selectedElement);
   
          const badgeType = itemType === 'ingrédient' ? 'ingredient' :
            itemType === 'ustensile' ? 'utensil' :
              itemType === 'appareil' ? 'appliance' : undefined;
          if (badgeType) {
            const normalizedElement = normalizeElement(item);
            const uniqueName = `${badgeType}_${normalizedElement}`;
            const existingBadge = document.querySelector(`[name="${uniqueName}"]`);
            if (existingBadge) {
              badgesContainer.removeChild(existingBadge);
              console.log(`Élément désélectionné dans ${itemType}: ${item}`);
            } else {
              createBadge(item, badgesContainer, badgeType);
              console.log(`Élément sélectionné dans ${itemType}: ${item}`);
            }
          } else {
            console.error("Type de badge inconnu:", itemType);
          }
        });
      });
    };

    // Appel de la fonction pour chaque type de liste avec les éléments uniques
    populateList(ingredientList, getUniqueIngredients(recipes), 'ingrédient');
    populateList(applianceList, getUniqueAppliances(recipes), 'appareil');
    populateList(utensilList, getUniqueUtensils(recipes), 'ustensile');
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

export { filterAndDisplayRecipes, updateDropdownLists };