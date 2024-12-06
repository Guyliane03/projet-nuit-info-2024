function augmenterTexte(pixel) {
    // Récupère tous les éléments de la page
    const elements = document.querySelectorAll('body *');
  
    // Parcourt tous les éléments et ajuste leur taille de police
    elements.forEach(element => {
        // Récupère la taille actuelle de la police de l'élément
        const currentSize = window.getComputedStyle(element).fontSize;
        const currentSizeInPx = parseFloat(currentSize); // Convertit la taille en pixels

        // Augmente la taille de la police de l'élément
        element.style.fontSize = (currentSizeInPx + pixel) + 'px';
    });
}

(function() {
    'use strict';

    let etat = 1;
    let position_top = ["100px", "250px", "30px"];
    let position_left = ["-150px", "1250px", "1000px"];

    const bateau = document.querySelector("#bateau");

    bateau.style.position = "absolute";
    bateau.style.zIndex = "-1";
    bateau.style.top = position_top[0];
    bateau.style.left = position_left[0];

    setInterval(function() {
        if (etat > 3) etat = 0;
        bateau.style.top = position_top[etat];
        bateau.style.left = position_left[etat];
        etat++;
    }, 1000);

    let position_top_poubelle = ["450px", "580px", "350px"];
    let position_left_poubelle = ["150px", "1550px", "1300px"];

    const container = document.querySelector("body");
    const poubelles = [];

    // Création des poubelles (points)
    for (let i = 0; i < position_top_poubelle.length; i++) {
        let poubelle = document.createElement("div");
        poubelle.id = "poubelle";
        poubelle.style.zIndex = "-2";
        poubelle.style.top = position_top_poubelle[i];
        poubelle.style.left = position_left_poubelle[i];
        poubelle.style.position = "absolute";

        container.appendChild(poubelle);
        poubelles.push(poubelle);
    }

    // Ajout des lignes entre les poubelles
    for (let i = 0; i < poubelles.length - 1; i++) {
        let line = document.createElement("div");
        line.style.position = "absolute";
        line.style.zIndex = "-3";

        // Récupération des coordonnées des poubelles
        let x1 = parseFloat(poubelles[i].style.left) + 50; // Centre de la poubelle (20px / 2)
        let y1 = parseFloat(poubelles[i].style.top) + 50;
        let x2 = parseFloat(poubelles[i + 1].style.left) + 50;
        let y2 = parseFloat(poubelles[i + 1].style.top) + 50;

        // Calcul des dimensions et de l'angle de la ligne
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        let angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

        // Style de la ligne
        line.style.width = distance + "px";
        line.style.height = "4px";
        line.style.backgroundColor = "white";
        line.style.top = y1 + "px";
        line.style.left = x1 + "px";
        line.style.transform = `rotate(${angle}deg)`;
        line.style.transformOrigin = "0 0";

        container.appendChild(line);
    }
})();
