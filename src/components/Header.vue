<template>
  <header :class="['navbar navbar-expand-lg navbar-light fixed-top shadow-sm', { 'scrolled': isScrolled }]">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#hero">Djabrailov Turpal</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="#hero">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">À Propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#timeline">Parcours</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          <li class="nav-item ms-lg-3">
            <button @click="toggleDarkMode" class="btn btn-outline-secondary btn-sm rounded-pill d-flex align-items-center px-3 py-1">
              <i :class="['me-2', isDarkMode ? 'fas fa-sun' : 'fas fa-moon']"></i>
              <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isDarkMode: false,
      isScrolled: false // Nouvelle variable pour le défilement
    };
  },
  mounted() {
    // Logique existante pour le Dark Mode
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      this.isDarkMode = savedMode === 'dark';
    } else {
      this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyDarkMode();

    // Nouvelle logique pour le défilement du header
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // N'oublie pas de retirer l'écouteur d'événement lorsque le composant est détruit
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // Méthodes existantes pour le Dark Mode
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.applyDarkMode();
    },
    applyDarkMode() {
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    },
    // Nouvelle méthode pour gérer le défilement
    handleScroll() {
      // Met isScrolled à true si on a défilé plus de 50px, sinon false
      this.isScrolled = window.scrollY > 50;
    }
  }
};
</script>

<style scoped>
/* Les styles existants pour le header */
.navbar-brand {
  font-size: 1.8em;
  color: var(--accent-color) !important;
}
.navbar-brand:hover {
  color: var(--accent-color) !important;
  opacity: 0.9;
}
.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
  color: var(--text-color) !important;
}
.nav-link:hover {
  color: var(--accent-color) !important;
}
.btn-outline-secondary {
  color: var(--text-color) !important;
  border-color: var(--text-color) !important;
  background-color: transparent !important;
}
.btn-outline-secondary:hover {
  background-color: var(--accent-color) !important;
  color: var(--bg-primary-light) !important;
  border-color: var(--accent-color) !important;
}

/* --- NOUVEAUX STYLES POUR LA TRANSPARENCE DU HEADER --- */
header {
  background-color: var(--background-alt-color) !important; /* Couleur de fond par défaut */
  transition: background-color 0.4s ease, backdrop-filter 0.4s ease; /* Transition pour le fond et le filtre */
}

header.scrolled {
  background-color: rgba(var(--background-alt-color-rgb), 0.9) !important; /* 90% d'opacité */
  backdrop-filter: blur(5px); /* Effet de flou derrière le header */
}

/* Surcharge de la couleur du texte si le header devient plus transparent sur un fond de section différent */
header.scrolled .nav-link,
header.scrolled .navbar-brand {
  color: var(--text-color) !important; /* Assure la lisibilité du texte sur le header transparent */
}
header.scrolled .navbar-toggler-icon {
  filter: var(--navbar-toggler-icon-filter, none); /* Réapplique le filtre pour le mode clair */
}
body.dark-mode header.scrolled .navbar-toggler-icon {
  filter: invert(1); /* S'assure qu'elle reste blanche en dark mode */
}
/* --- FIN DES NOUVEAUX STYLES POUR LA TRANSPARENCE DU HEADER --- */
</style>