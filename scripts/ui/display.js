function displayRecipes(recipes) {
    const template = document.querySelector("#recipeCard");
    const container = document.querySelector("#recipes");
    container.innerHTML = ''; // Effacer le contenu actuel
    document.getElementById('totalRecipes').textContent = `${recipes.length} recettes`; // Afficher le nombre de recettes dans <b id="totalRecipes"></b>

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
                listItem.innerHTML = `${ingredient.ingredient}: ${ingredient.quantity || ''} ${ingredient.unit || ''}`;
                ingredientsListElement.appendChild(listItem);
            });
            container.appendChild(clone);
        });
    } else {
        container.innerHTML = '<p>Aucune recette trouvée.</p>';
    }
}

export { displayRecipes }