// Fonction pour jouer ou mettre en pause l'audio
         function playPauseAudio() {
            var audio = document.getElementById("audio");

            // Si l'audio est en pause, on le joue. Sinon, on le met en pause.
            if (audio.paused) {
                audio.play();
                document.querySelector('.speaker-btn i').classList.remove('fa-volume-up');
                document.querySelector('.speaker-btn i').classList.add('fa-volume-mute');
            } else {
                audio.pause();
                document.querySelector('.speaker-btn i').classList.remove('fa-volume-mute');
                document.querySelector('.speaker-btn i').classList.add('fa-volume-up');
            }
        }
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

    localStorage.setItem("games_completed", 0);

    let etat_menu_open = false;

    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.getElementById("slider");
        const sliderValue = document.getElementById("slider-value");
      
        slider.value = 0;
        sliderValue.textContent = slider.value;
      
        slider.addEventListener("input", function () {

            let old_value = parseInt(sliderValue.textContent);

            let new_value = slider.value;

            let diff = new_value-old_value;

            augmenterTexte(diff);

            sliderValue.textContent = new_value;

        });

        document.querySelector(".handicap-content").style.display = "none";
        const handicapMenuButton = document.querySelector(".handicap-menu");

        handicapMenuButton.addEventListener("click", function(){
            if (!etat_menu_open) document.querySelector(".handicap-content").style.display = "";
            else document.querySelector(".handicap-content").style.display = "none";
            etat_menu_open = !etat_menu_open;
        });
    });


    let etat = 1;
    let position_top = ["100px", "250px", "30px"];
    let position_left = ["-150px", "1250px", "1000px"];

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

})();
