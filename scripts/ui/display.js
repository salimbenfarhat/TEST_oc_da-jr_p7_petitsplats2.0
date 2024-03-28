import { currentSearchQuery } from '../main.js';
import { filterByIngredient } from '../utils/searchAndFilters_Functions.js';
import { updateTotalRecipesCount } from '../utils/searchAndFilters_Logic.js';

function displayRecipes(recipes, searchQuery = '') {
    const template = document.querySelector("#recipeCard");
    const container = document.querySelector("#recipes");
    container.innerHTML = ''; // Effacer le contenu actuel

    // Si des recettes sont disponibles, les afficher sinon afficher "Aucune recette trouvée."
    if (recipes.length > 0) {
        // Parcourir les recettes
        recipes.forEach(recipe => {
            // Cloner le template pour chaque nouvelle recette
            const clone = template.content.cloneNode(true);
            // Injecter les informations de la recette dans le template
            clone.querySelector(".card-img-top").src = `./assets/img/Recettes/Resized/${recipe.image}`;
            clone.querySelector(".card-img-top").alt = recipe.name;
            clone.querySelector(".badge").textContent = `${recipe.time} min`;
            clone.querySelector(".card-title").textContent = recipe.name;
            clone.querySelector(".card-text").textContent = recipe.description;
            const ingredientsListElement = clone.querySelector("#ingredientsList");
            // Parcourir les ingrédients
            recipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                // Afficher les informations de l'ingrédient
                listItem.innerHTML = `${ingredient.ingredient} <span class="ingredient-quantity">${ingredient.quantity || ''} ${ingredient.unit || ''}</span>`;
                ingredientsListElement.appendChild(listItem);
            });
            container.appendChild(clone);
        });
    } else {
        container.innerHTML = `<p id="no-recipes">Aucune recette ne contient <b><u>${searchQuery}</u></b>. Vous pouvez chercher <b>tarte aux pommes</b>, <b>poisson</b>, etc.</p>`;
    }
}

export { displayRecipes }