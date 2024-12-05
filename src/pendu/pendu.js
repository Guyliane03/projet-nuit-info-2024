const alphabetFr = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Fonction pour générer les spans
function generateAlphabet() {
    const container = document.createElement('div');
    container.id = 'clavier';
    document.body.appendChild(container);


    alphabetFr.forEach(letter => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.id = letter.toLowerCase();
        container.appendChild(span);
    });
}

// Appel de la fonction pour générer l'alphabet
generateAlphabet();