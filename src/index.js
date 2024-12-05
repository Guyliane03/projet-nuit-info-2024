(function() {
    'use strict';

    let etat = 1;
    let position_top = ["200px","275px","20px","-250px"];
    let position_left = ["200px","700px","1150px","850px"];

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