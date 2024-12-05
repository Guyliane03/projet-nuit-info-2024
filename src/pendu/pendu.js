const alphabetFr = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const questionsPendu = ["Le réchauffement des océans impacte la _________ des espèces marines.", 
    "Le réchauffement climatique cause l'_________ des océans.",
    "La température des ______ peut être comparé à la température du corps humain, quelques degrés en plus suffisent à avoir de gros problèmes."];

const réponsesPendu = ["MIGRATION","ELEVATION","OCEANS"]

mot = 0

// Fonction pour générer les spans
function generateAlphabet() {
    const container = document.createElement('div');
    container.id = 'clavier';
    document.body.appendChild(container);


    alphabetFr.forEach(letter => {
        const span = document.createElement("span");
        span.addEventListener("click", () => {
            console.log(letter);
            console.log(bonneLettre(réponsesPendu[mot], letter));
        });
        span.textContent = letter + " ";
        span.id = letter.toLowerCase();
        container.appendChild(span);
    });
}

function bonneLettre(mot1, lettre) {
    for(let i = 0; i < mot1.length; i++)
    {
        if(mot1[i] == lettre)
        {
            return true
        }
    }
    return false
}



question = document.createElement("p");
question.textContent = questionsPendu[mot];
const nextButton = document.createElement('button');
nextButton.textContent = "Suivant";
nextButton.onclick = () => {
    mot++;

    if (mot >= questionsPendu.length) {
        alert("Toutes les questions ont été affichées !");
        nextButton.disabled = true; 
    } else {
        question.textContent = questionsPendu[mot];
    }
};


document.body.appendChild(question);
motATrouve = document.createElement('p');
for(let i = 0; i < réponsesPendu[mot].length; i++)
{
    motATrouve.textContent += "_";
}
document.body.appendChild(motATrouve);


function ajouterLettre(lettre) {
    motATrouve.textContent
    for(let i = 0; i < réponsesPendu[mot].length; i++)
    {
        
        motATrouve.textContent += "_";
    }
}

generateAlphabet();
document.body.appendChild(nextButton);