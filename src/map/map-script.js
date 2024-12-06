function augmenterTexte(pixel) {
    // Récupère tous les éléments de la page
    const elements = document.querySelectorAll('body *');
  
    // Parcourt tous les éléments et ajuste leur taille de police
    elements.forEach(element => {
      // Récupère la taille actuelle de la police de l'élément
      const currentSize = window.getComputedStyle(element).fontSize;
      const currentSizeInPx = parseFloat(currentSize);  // Convertit la taille en pixels
  
      // Augmente la taille de la police de l'élément
      element.style.fontSize = (currentSizeInPx + pixel) + 'px';
    });
  }


(function() {
    'use strict';



    let etat = 1;
    let position_top = ["100px","250px","30px"];
    let position_left = ["-150px","1250px","1000px"];

    const bateau = document.querySelector("#bateau");

    bateau.style.position = "absolute";
    bateau.style.zIndex = "-1";
    bateau.style.top = position_top[0];
    bateau.style.left = position_left[0];
    

    setInterval(function(){
        if (etat > 3) etat = 0;
        bateau.style.top = position_top[etat];
        bateau.style.left = position_left[etat];
        etat++;
    },1000);

    let position_top_poubelle = ["450px", "580px", "350px"];
    let position_left_poubelle = ["150px", "1550px", "1300px"];

const container = document.querySelector("body");

for (let i = 0; i < position_top.length; i++) {
    let poubelle = document.createElement("div");
    poubelle.id = "poubelle"
    poubelle.style.zIndex = "-2";
    poubelle.style.top = position_top_poubelle[i];
    poubelle.style.left = position_left_poubelle[i];
    poubelle.style.position = "absolute";

    container.appendChild(poubelle);
}



})();