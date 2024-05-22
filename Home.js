// Sélection des éléments du DOM
let menu = document.querySelector('#menu-bars'); // Sélectionne l'élément avec l'ID 'menu-bars'
let navbar = document.querySelector('.navbar'); // Sélectionne l'élément avec la classe 'navbar'

// Écouteur d'événement pour le menu burger
menu.onclick = () =>{
    menu.classList.toggle('fa-times'); // Ajoute ou supprime la classe 'fa-times' au menu
    navbar.classList.toggle('active'); // Ajoute ou supprime la classe 'active' à la navbar
}

// Écouteur d'événement pour l'icône d'utilisateur
document.getElementById("fa-user").addEventListener("click", function() {
    alert("Veuillez vous inscrire avant de continuer."); // Affiche une alerte lorsqu'on clique sur l'icône d'utilisateur
});

// Sélection de toutes les sections et de tous les liens de navigation
let section = document.querySelectorAll('section'); // Sélectionne toutes les balises section
let navLinks = document.querySelectorAll('header .navbar a'); // Sélectionne tous les liens de navigation dans le header

// Événement de défilement de la fenêtre
window.onscroll = () =>{
    // Supprime les classes 'fa-times' et 'active' lors du défilement
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // Itération sur toutes les sections
    section.forEach(sec =>{
        let top=window.scrollY; // Récupère la position de défilement de la fenêtre
        let height =sec.offsetHeight; // Récupère la hauteur de la section
        let offset = sec.offsetTop -150; // Récupère la position de la section par rapport au haut de la page
        let id = sec.getAttribute('id'); // Récupère l'ID de la section

        // Vérifie si la fenêtre est dans la section affichée
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
              links.classList.remove('active'); // Supprime la classe 'active' de tous les liens
              document.querySelector('header .navbar a[href*='+id+']').classList.add('active'); // Ajoute la classe 'active' au lien correspondant à la section affichée
            });
        };
    });
}

// Écouteur d'événement pour l'icône de recherche
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active'); // Ajoute ou supprime la classe 'active' au formulaire de recherche
}

// Écouteur d'événement pour l'icône de fermeture du formulaire de recherche
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active'); // Supprime la classe 'active' du formulaire de recherche
}

// Fonction pour masquer le loader
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out'); // Ajoute la classe 'fade-out' au conteneur du loader
}

// Fonction pour déclencher le masquage du loader après un certain délai
function fadeOut(){
    setInterval(loader, 2000); // Exécute la fonction loader toutes les 2 secondes
}

window.onload = fadeOut; // Lance la fonction fadeOut lorsque la fenêtre est chargée

    