// Créer le div#content et l'ajouter au body
const contentDiv = document.createElement('div');
contentDiv.id = 'content';
document.body.appendChild(contentDiv);
contentDiv.style.display = 'none';  // Le div est initialement masqué

// Ajouter les styles
const style = document.createElement('style');
style.textContent = `
  #content {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;  /* Prendre toute la largeur de l'écran */
      height: 100vh;  /* Prendre toute la hauteur de l'écran */
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);  /* Applique l'effet de flou derrière le div */
      background: rgba(255, 255, 255, 0);  /* Fond transparent */
      z-index: 9999;  /* S'assurer que le div est au-dessus des autres éléments */
  }

  #bubble-container {
      position: relative;
      display: flex;
      justify-content: center;  /* La bulle est centrée horizontalement */
      margin-bottom: 20px;  /* Espacement plus grand entre la bulle et l'image */
      align-items: center;  /* Centrer le contenu du conteneur verticalement */
      text-align: center;  /* Centrer le texte de la bulle */
  }

  #character {
      width: 150px;  /* Taille de l'image du personnage */
      height: auto;
  }

  .bubble {
      position: relative;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #f1f1f1;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 10px;
      font-family: Arial, sans-serif;
      text-align: center;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      width: 90%;  /* La bulle s'étend sur 90% de la largeur du conteneur */
      max-width: 500px;  /* Limiter la taille maximale de la bulle */
      margin-bottom: 10px; /* Légèrement plus d'espace entre la bulle et le personnage */
  }

  /* Modification du triangle pour qu'il pointe vers le bas sous la bulle */
  .bubble::after {
      content: "";
      position: absolute;
      top: 100%;  /* Positionner la flèche sous la bulle */
      left: 50%;
      margin-left: -10px;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #f1f1f1 transparent;  /* Couleur de la flèche vers le bas */
  }
`;
document.head.appendChild(style);

// Structure du HTML du div#content
contentDiv.innerHTML = `
  <div id="bubble-container"></div>
  <img id="character" src="../../images/main_character.png" alt="Personnage">
`;

// Créer la bulle de texte
const bubble = document.createElement('div');
bubble.classList.add('bubble');
bubble.textContent = "Bonjour ! Je suis l'Esprit de l'Eau.";  // Le texte de la bulle

const bubbleContainer = document.getElementById('bubble-container');
bubbleContainer.appendChild(bubble);

// Fonction pour modifier le texte de la bulle
function setSpeechBubble(text) {
    bubble.textContent = text;
}

// Fonction pour afficher ou masquer le div#content
function toggleVisibility() {
    const contentDiv = document.getElementById('content');
    if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
        contentDiv.style.display = 'flex';  // Afficher le div
    } else {
        contentDiv.style.display = 'none';  // Masquer le div
    }
}

// Par exemple, vous pouvez appeler toggleVisibility() pour afficher ou masquer le div
