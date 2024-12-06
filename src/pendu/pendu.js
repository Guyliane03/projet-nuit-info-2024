const alphabetFr = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const questionsPendu = [
    "Le réchauffement des océans impacte la _________ des espèces marines.", 
    "Le réchauffement climatique cause l'_________ des océans.",
    "La température des ______ peut être comparé à la température du corps humain, quelques degrés en plus suffisent à avoir de gros problèmes."
];

const réponsesPendu = ["MIGRATION", "ELEVATION", "OCEANS"];

let mot = 0;

// Fonction pour générer les spans
function generateAlphabet() {
    const container = document.createElement('div');
    container.id = 'clavier';
    document.body.appendChild(container);

    alphabetFr.forEach(letter => {
        const span = document.createElement("span");
        span.addEventListener("click", () => {
            console.log(`Lettre cliquée : ${letter}`);
            updateMotATrouve(réponsesPendu[mot], letter);
        });
        span.textContent = letter + " ";
        span.id = letter.toLowerCase();
        container.appendChild(span);
    });
}

// Fonction pour vérifier si une lettre est bonne
function bonneLettre(mot1, lettre) {
    return mot1.includes(lettre); // Vérifie si la lettre est dans le mot
}

// Mise à jour du mot à trouver avec les bonnes lettres
function updateMotATrouve(mot1, lettre) {
    // Si la lettre est dans le mot
    if (bonneLettre(mot1, lettre)) {
        // Mettre à jour les underscores avec la lettre trouvée
        let updatedText = "";
        for (let i = 0; i < mot1.length; i++) {
            if (mot1[i] === lettre) {
                updatedText += lettre; // Ajouter la lettre trouvée
            } else {
                updatedText += motATrouve.textContent[i]; // Conserver l'état précédent
            }
        }
        motATrouve.textContent = updatedText; // Mettre à jour l'affichage
    } else {
        console.log(`La lettre ${lettre} n'est pas dans le mot.`);
    }
}

// Création de la question
const question = document.createElement("p");
question.textContent = questionsPendu[mot];
document.body.appendChild(question);

// Création de l'affichage du mot à trouver
let motATrouve = document.createElement('p');
motATrouve.textContent = "_".repeat(réponsesPendu[mot].length);
document.body.appendChild(motATrouve);

// Bouton "Suivant"
const nextButton = document.createElement('button');
nextButton.textContent = "Suivant";
nextButton.onclick = () => {
    mot++;

    if (mot >= questionsPendu.length) {
        alert("Toutes les questions ont été affichées !");
        nextButton.disabled = true; 
    } else {
        question.textContent = questionsPendu[mot];
        motATrouve.textContent = "_".repeat(réponsesPendu[mot].length); // Réinitialiser l'affichage du mot
    }
};

document.body.appendChild(nextButton);

// Générer l'alphabet
generateAlphabet();
