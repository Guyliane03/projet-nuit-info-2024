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
let erreurs = 0; // Compteur d'erreurs
const maxErreurs = 7; // Nombre maximum d'erreurs

function generateAlphabet() {
    const container = document.createElement('div');
    container.id = 'clavier';
    document.body.appendChild(container);

    alphabetFr.forEach(letter => {
        const span = document.createElement("span");
        span.textContent = letter + " ";
        span.id = letter.toLowerCase();

        span.style.cursor = "pointer"; // Pour signaler que c'est cliquable
        span.style.padding = "5px";
        span.style.border = "1px solid #ccc";
        span.style.margin = "2px";
        span.style.display = "inline-block";
        span.style.userSelect = "none";

        span.addEventListener("click", () => {
            // Si la lettre est déjà désactivée, ignorer
            if (span.style.pointerEvents === "none") return;

            // Vérifier si la lettre est correcte ou non
            if (bonneLettre(réponsesPendu[mot], letter)) {
                span.style.backgroundColor = "green"; // Correcte
            } else {
                span.style.backgroundColor = "red"; // Incorrecte
                erreurs++; // Incrémenter les erreurs
                updateErrors(); // Mettre à jour l'affichage des erreurs
            }
            span.style.color = "white"; // Rendre le texte plus visible
            span.style.pointerEvents = "none"; // Désactiver le clic
            span.style.opacity = "0.6"; // Griser

            updateMotATrouve(réponsesPendu[mot], letter);
        });

        container.appendChild(span);
    });
}

function bonneLettre(mot1, lettre) {
    return mot1.includes(lettre);
}

function updateMotATrouve(mot1, lettre) {
    if (bonneLettre(mot1, lettre)) {
        let updatedText = "";
        for (let i = 0; i < mot1.length; i++) {
            if (mot1[i] === lettre) {
                updatedText += lettre;
            } else {
                updatedText += motATrouve.textContent[i];
            }
        }
        motATrouve.textContent = updatedText;

        if (motATrouve.textContent === mot1) {
            // Remplace tous les underscores dans la question par le mot trouvé
            question.textContent = questionsPendu[mot].replace(/_+/g, mot1);

            congratulations.textContent = `Bravo ! Vous avez trouvé le mot : ${mot1}`;
            nextButton.style.display = "block";
        }
    }
}

function updateErrors() {
    errorDisplay.textContent = `Erreurs : ${erreurs} / ${maxErreurs}`;
    if (erreurs >= maxErreurs) {
        gameOver();
    }
}

function gameOver() {
    congratulations.textContent = "Game Over ! Vous avez épuisé vos essais.";
    congratulations.style.color = "red";

    // Désactiver toutes les lettres
    const spans = document.querySelectorAll('#clavier span');
    spans.forEach(span => {
        span.style.pointerEvents = "none";
        span.style.opacity = "0.6";
    });

    // Masquer le bouton "Suivant" s'il est visible
    nextButton.style.display = "block";
}

const question = document.createElement("p");
question.textContent = questionsPendu[mot];
document.body.appendChild(question);

let motATrouve = document.createElement('p');
motATrouve.textContent = "_".repeat(réponsesPendu[mot].length);
document.body.appendChild(motATrouve);

const congratulations = document.createElement('p');
congratulations.style.color = "#00ff6a";
congratulations.style.fontWeight = 'bold';
document.body.appendChild(congratulations);

const errorDisplay = document.createElement('p');
errorDisplay.style.color = "red";
errorDisplay.style.fontWeight = 'bold';
errorDisplay.textContent = `Erreurs : ${erreurs} / ${maxErreurs}`;
document.body.appendChild(errorDisplay);

const buttonContainer = document.createElement('div');
buttonContainer.style.textAlign = "center";
document.body.appendChild(buttonContainer);

const nextButton = document.createElement('button');
nextButton.textContent = "Suivant";
nextButton.style.display = "none";
nextButton.onclick = () => {
    mot++;
    erreurs = 0; // Réinitialiser les erreurs

    if (mot >= questionsPendu.length) {
        congratulations.textContent = "Toutes les questions ont été affichées !";
        nextButton.style.display = "none";
        terminerButton.style.display = "block"; // Afficher le bouton "Terminer"
    } else {
        question.textContent = questionsPendu[mot];
        motATrouve.textContent = "_".repeat(réponsesPendu[mot].length);
        congratulations.textContent = "";
        errorDisplay.textContent = `Erreurs : ${erreurs} / ${maxErreurs}`;
        nextButton.style.display = "none";

        // Réinitialiser l'état des lettres
        const spans = document.querySelectorAll('#clavier span');
        spans.forEach(span => {
            span.style.pointerEvents = "auto"; // Rendre cliquable
            span.style.backgroundColor = ""; // Réinitialiser la couleur
            span.style.color = ""; 
            span.style.opacity = "1"; // Rétablir l'opacité
        });
    }
};
buttonContainer.appendChild(nextButton);

const terminerButton = document.createElement('button');
terminerButton.textContent = "Terminer";
terminerButton.style.display = "none";
terminerButton.onclick = () => {
    window.location.href = "../map/map.html";
};
buttonContainer.appendChild(terminerButton);

generateAlphabet();
