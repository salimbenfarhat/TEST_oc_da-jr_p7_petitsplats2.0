// Filtre les recettes en fonction de la recherche
function searchByQuery(recipes, query) {
    if (typeof query !== 'string') {
        console.error('Le paramètre query doit être une chaîne de caractères :', query);
        return []; // Retourner un tableau vide ou gérer l'erreur comme nécessaire
    }

    const filteredRecipes = recipes.filter(recipe => {
         // Utilisation de la méthode filter pour filtrer les recettes
         return (
           // Vérifier si le nom de la recette inclut la valeur de recherche
           recipe.name.toLowerCase().includes(query.toLowerCase()) ||
           // Vérifier si la recherche correspond à l'un des ingrédients de la recette
           recipe.ingredients.some(ingredient =>
             ingredient.ingredient.toLowerCase().includes(query.toLowerCase())
           ) ||
           // Vérifier si la description de la recette inclut la valeur de recherche
           recipe.description.toLowerCase().includes(query.toLowerCase())
         );
       });
       //console.log("Recettes filtrées:", filteredRecipes);
     return filteredRecipes;
 }
 


// Retourne un tableau des ingrédients uniques en minuscules
function getUniqueIngredients(recipes) {
    const allIngredients = new Set();
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            allIngredients.add(ingredient.ingredient.toLowerCase());
        });
    });
    //console.log("Ingrédients uniques:", Array.from(allIngredients));
    return Array.from(allIngredients);
}

// Retourne un tableau des appareils uniques en minuscules
function getUniqueAppliances(recipes) {
    const allAppliances = new Set();
    recipes.forEach(recipe => {
        allAppliances.add(recipe.appliance.toLowerCase());
    });
    //console.log("Appareils uniques:", Array.from(allAppliances));
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
    //console.log("Ustensiles uniques:", Array.from(allUtensils));
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

export { getUniqueIngredients, getUniqueAppliances, getUniqueUtensils, searchByQuery, filterByIngredient, filterByAppliance, filterByUtensil };