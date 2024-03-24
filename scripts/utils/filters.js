// Retourne un tableau des ingrédients uniques en minuscules
function getUniqueIngredients(recipes) {
    const allIngredients = new Set();
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            allIngredients.add(ingredient.ingredient.toLowerCase());
        });
    });
    console.log("Ingrédients uniques:", Array.from(allIngredients));
    return Array.from(allIngredients);
}

// Retourne un tableau des appareils uniques en minuscules
function getUniqueAppliances(recipes) {
    const allAppliances = new Set();
    recipes.forEach(recipe => {
        allAppliances.add(recipe.appliance.toLowerCase());
    });
    console.log("Appareils uniques:", Array.from(allAppliances));
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
    console.log("Ustensiles uniques:", Array.from(allUtensils));
    return Array.from(allUtensils);
}

// Filtre les recettes en fonction de l'ingrédient spécifié
function filterByIngredient(recipes, ingredient) {
    const filteredRecipes = recipes.filter(recipe => 
        recipe.ingredients.some(ing => 
            ing.ingredient.toLowerCase() === ingredient.toLowerCase()
        )
    );
    console.log(`Recettes filtrées par l'ingrédient '${ingredient}':`, filteredRecipes);
    return filteredRecipes;
}

// Filtre les recettes en fonction de l'appareil spécifié
function filterByAppliance(recipes, appliance) {
    const filteredRecipes = recipes.filter(recipe => 
        recipe.appliance.toLowerCase() === appliance.toLowerCase()
    );
    console.log(`Recettes filtrées par l'appareil '${appliance}':`, filteredRecipes);
    return filteredRecipes;
}

// Filtre les recettes en fonction de l'ustensile spécifié
function filterByUtensil(recipes, utensil) {
    const filteredRecipes = recipes.filter(recipe => 
        recipe.ustensils.some(ust => 
            ust.toLowerCase() === utensil.toLowerCase()
        )
    );
    console.log(`Recettes filtrées par l'ustensile '${utensil}':`, filteredRecipes);
    return filteredRecipes;
}

export { getUniqueIngredients, getUniqueAppliances, getUniqueUtensils, filterByIngredient, filterByAppliance, filterByUtensil };