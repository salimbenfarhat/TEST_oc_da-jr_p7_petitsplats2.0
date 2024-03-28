function searchRecipesWithLoops(recipes, searchTerm) {
    let results = []; // Initialise le tableau des résultats
    // Parcourt chaque recette dans le tableau des recettes
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i]; // Obtient la recette courante
        // Vérifie si le terme de recherche est inclus dans le titre ou la description de la recette
        if (recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) || recipe.description.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(recipe); // Ajoute la recette aux résultats si correspondance
            continue; // Passe à la recette suivante
        }

        // Parcourt chaque ingrédient de la recette courante
        for (let j = 0; j < recipe.ingredients.length; j++) {
            // Vérifie si le terme de recherche est inclus dans l'ingrédient
            if (recipe.ingredients[j].ingredient.toLowerCase().includes(searchTerm.toLowerCase())) {
                results.push(recipe); // Ajoute la recette aux résultats si correspondance
                break; // Sort de la boucle d'ingrédients car correspondance trouvée
            }
        }
    }
    //console.log(results); // Affiche les résultats dans la console avant de retourner
    return results; // Retourne le tableau des résultats
}


function searchRecipesWithFunctionalProgramming(recipes, searchTerm) {
    // Utilise la méthode `filter` pour filtrer les recettes
    const results = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Vérifie le nom de la recette
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) || // Vérifie la description
        recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm.toLowerCase())) // Vérifie chaque ingrédient
    );
    // La méthode `some` retourne true si au moins un ingrédient correspond au terme de recherche
    //console.log(results); // Affiche les résultats dans la console avant de retourner
    return results; // Retourne le tableau des résultats filtrés
}

export { searchRecipesWithLoops, searchRecipesWithFunctionalProgramming };
