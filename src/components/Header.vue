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
      isDarkMode: false, // Controls the 'dark-mode' class
      isScrolled: false // Variable for scroll effect
    };
  },
  mounted() {
    // This component is responsible for setting the initial mode based on saved preferences.
    this.applySavedTheme();

    // Add scroll listener for header styling
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // Helper to get all known palette classes (update this if you add more palettes)
    getAllPaletteClasses() {
      return [
        'palette-radix-light',
        'palette-radix-dark',
        'palette-forest',
        'palette-ocean'
        // Add any other palette classes here
      ];
    },
    toggleDarkMode() {
      // Toggle the internal state
      this.isDarkMode = !this.isDarkMode;
      // Apply the new mode to the body and update localStorage
      this.applyMode();
    },
    applyMode() {
      // Step 1: Remove all custom palette classes (if any are active)
      document.body.classList.remove(...this.getAllPaletteClasses());

      // Step 2: Apply or remove the 'dark-mode' class based on this.isDarkMode
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('currentMode', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('currentMode', 'light');
      }

      // Step 3: Clear any saved palette, as the basic mode now takes precedence
      localStorage.removeItem('currentPalette');
    },
    applySavedTheme() {
      const savedMode = localStorage.getItem('currentMode');
      const savedPalette = localStorage.getItem('currentPalette');

      // First, ensure a clean slate by removing all known theme/palette classes
      document.body.classList.remove('dark-mode', ...this.getAllPaletteClasses());

      // Priority: Palette from ThemeSelector > Basic Light/Dark Mode > System preference
      if (savedPalette) {
        // If a specific palette was saved, apply it
        document.body.classList.add(savedPalette);
        this.isDarkMode = false; // Ensure header button reflects a non-dark-mode state
      } else if (savedMode) {
        // If a basic mode (light/dark) was saved
        this.isDarkMode = savedMode === 'dark';
        if (this.isDarkMode) {
          document.body.classList.add('dark-mode');
        }
      } else {
        // No saved preference, default to system preference (or light if none)
        this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (this.isDarkMode) {
          document.body.classList.add('dark-mode');
        }
        localStorage.setItem('currentMode', this.isDarkMode ? 'dark' : 'light');
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
};
</script>

<style scoped>
/* Your existing scoped styles for the header go here */
/* (e.g., .navbar, .navbar-brand, .nav-link, .navbar-toggler-icon, etc.) */

/* Make sure your .btn-outline-secondary and .btn-dark styles are compatible with theming */
.btn-outline-secondary {
  color: var(--text-color) !important;
  border-color: var(--border-color) !important;
}
.btn-outline-secondary:hover {
  background-color: var(--border-color) !important;
  color: var(--text-primary) !important; /* Adjust if needed for contrast */
}
.btn-dark { /* This button is probably for the 'Dark' mode in the header */
  background-color: var(--bg-primary) !important; /* This should be the accent color in light mode, or a dark background in dark mode */
  color: var(--accent-color) !important; /* Text color on this button */
  border-color: var(--accent-color) !important;
}
.btn-dark:hover {
    background-color: var(--accent-color) !important;
    color: var(--bg-primary) !important;
}


/* Ensure the navbar styles use the CSS variables for theming */
.navbar {
  background-color: var(--background-alt-color) !important;
  transition: background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important; /* Keep a subtle shadow */
  border-bottom: 1px solid var(--border-color) !important;
}
header.scrolled {
  background-color: rgba(var(--background-alt-color-rgb), 0.9) !important;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.15) !important;
}
.navbar-brand, .nav-link {
  color: var(--text-primary) !important; /* Ensure brand and links use primary text color */
}
.navbar-brand:hover, .nav-link:hover {
  color: var(--accent-color) !important; /* Accent color on hover */
}
.navbar-toggler-icon {
  background-image: var(--navbar-toggler-icon-filter); /* Uses SVG from main.css */
}

/* Specific styles for your `fw-bold` class on navbar-brand if it's not inherited */
.navbar-brand.fw-bold {
  font-weight: 700; /* Assuming fw-bold means font-weight: bold or 700 */
}
</style>

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