// Données associées aux avatars
const avatarData = [
    {
        id: 1,
        firstName: "Arina",
        lastName: "Abed",
        linkedin: "https://www.linkedin.com/in/arina-abed-aa2b3425a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        id: 2,
        firstName: "Guyliane",
        lastName: "Goutard",
        github: "https://github.com/Guyliane03"
    },
    {
        id: 3,
        firstName: "Laura",
        lastName: "Chaduc",
        linkedin: "https://www.linkedin.com/in/laura-chaduc/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        id: 4,
        firstName: "Alexis",
        lastName: "Launay",
        github: "https://github.com/ayluc"
    },
    {
        id: 5,
        firstName: "Lucas",
        lastName: "Branchu",
        linkedin: "https://www.linkedin.com/in/lucas-branchu-11453632a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        id: 6,
        firstName: "Allae",
        lastName: "Tonia",
        linkedin: "https://www.linkedin.com/in/allae-tonia-767527215/",
    }
];

// Fonction appelée lorsqu'on clique sur un avatar
function onAvatarClick(avatarId, avatarElement) {
    const avatar = avatarData.find(a => a.id === avatarId);
    if (avatar) {
        // Mettre à jour le contenu de la pop-up
        document.getElementById("info-name").textContent = `${avatar.firstName} ${avatar.lastName}`;
        
        const linkedinLink = document.getElementById("info-linkedin");
        const githubLink = document.getElementById("info-github");

        // Vérifier si LinkedIn existe
        if (avatar.linkedin) {
            linkedinLink.href = avatar.linkedin;
            linkedinLink.textContent = "Voir LinkedIn";
            linkedinLink.style.display = "block"; // Afficher le lien
        } else {
            linkedinLink.style.display = "none"; // Masquer le lien
        }

        // Vérifier si GitHub existe
        if (avatar.github) {
            githubLink.href = avatar.github;
            githubLink.textContent = "Voir GitHub";
            githubLink.style.display = "block"; // Afficher le lien
        } else {
            githubLink.style.display = "none"; // Masquer le lien
        }

        // Positionner la pop-up au-dessus de l'avatar
        const rect = avatarElement.getBoundingClientRect();
        const popup = document.getElementById("avatar-info");
        popup.style.left = `${rect.left + window.pageXOffset}px`;
        popup.style.top = `${rect.top + window.pageYOffset - popup.offsetHeight - 10}px`; // Juste au-dessus avec marge
        popup.style.display = "block";
    }
}

// Cacher la pop-up quand on clique ailleurs
document.addEventListener("click", (event) => {
    const popup = document.getElementById("avatar-info");
    if (!popup.contains(event.target)) {
        popup.style.display = "none";
    }
});

// Ajout d'écouteurs d'événements sur les avatars
document.addEventListener("DOMContentLoaded", () => {
    const avatars = document.querySelectorAll(".avatar");

    avatars.forEach((avatar, index) => {
        avatar.addEventListener("click", (event) => {
            event.stopPropagation(); // Empêche de cacher la pop-up si on clique dessus
            onAvatarClick(index + 1, avatar);
        });
    });
});
