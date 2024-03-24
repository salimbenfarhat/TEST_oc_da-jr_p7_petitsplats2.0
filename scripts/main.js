import { recipes } from '../data/recipes.js';

// Rcupération des recettes initiales
function getInitialRecipes() {
  return recipes;
}

// Retourne un tableau des ingrédients uniques en minuscules
function getUniqueIngredients(recipes) {
    const allIngredients = new Set();
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            allIngredients.add(ingredient.ingredient.toLowerCase());
        });
    });
    return Array.from(allIngredients);
}

// Retourne un tableau des appareils uniques en minuscules
function getUniqueAppliances(recipes) {
    const allAppliances = new Set();
    recipes.forEach(recipe => {
        allAppliances.add(recipe.appliance.toLowerCase());
    });
    return Array.from(allAppliances);
}

// Retourne un tableau des ustensiles uniques en minuscules
function getUniqueUtensils(recipes) {
    const allUtensils = new Set();
    recipes.forEach(recipe => {
        recipe.ustensils.forEach(utensil => {
            allUtensils.add(utensil.toLowerCase());
        });
    });
    return Array.from(allUtensils);
}

function init() {
    getInitialRecipes();
    console.log("Liste de recettes", getInitialRecipes());
    console.log("Liste d'ingredients", getUniqueIngredients(getInitialRecipes()));
    console.log("Liste d'appareils", getUniqueAppliances(getInitialRecipes()));
    console.log("Liste d'ustensiles", getUniqueUtensils(getInitialRecipes()));
}

// Appel de la fonction d'initialisation après chargement du DOM
window.addEventListener('DOMContentLoaded', init);