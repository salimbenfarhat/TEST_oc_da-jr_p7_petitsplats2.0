function normalizeElement(element) {
    // Convertit en minuscules
    let normalizedElement = element.toLowerCase();
    // Remplace les espaces par des underscores
    normalizedElement = normalizedElement.replace(/\s+/g, '_');
    // Supprime les accents
    normalizedElement = normalizedElement.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Retourne l'element normalisé
    return normalizedElement;
}

export { normalizeElement }