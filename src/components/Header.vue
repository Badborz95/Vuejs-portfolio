<template>
  <header :class="['navbar navbar-expand-lg navbar-light fixed-top shadow-sm', { 'scrolled': isScrolled }]">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#hero">
        <img :src="headerLogo" alt="Logo de Djabrailov Turpal" class="navbar-logo me-2">
        <span class="fw-bold">Djabrailov Turpal</span>
      </a>
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

          <li class="nav-item ms-lg-3 d-flex align-items-center">
            <button @click="toggleDarkMode" class="btn btn-outline-secondary btn-sm rounded-pill d-flex align-items-center px-3 py-1 me-2">
              <i :class="['me-2', isDarkMode ? 'fas fa-sun' : 'fas fa-moon']"></i>
              <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
            </button>

            <div class="dropdown d-lg-none">
              <button class="btn btn-outline-secondary btn-sm rounded-circle dropdown-toggle" type="button" id="paletteDropdownMobile" data-bs-toggle="dropdown" aria-expanded="false" title="Choisir une ambiance">
                <i class="fas fa-palette"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="paletteDropdownMobile">
                <li><h6 class="dropdown-header">Choisir une ambiance</h6></li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="selectPalette('palette-radix-light')">
                    <div class="color-preview radix-light-preview me-2"></div>
                    <span>Ambiance Radix UI (Clair)</span>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="selectPalette('palette-radix-dark')">
                    <div class="color-preview radix-dark-preview me-2"></div>
                    <span>Ambiance Radix UI (Sombre)</span>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="selectPalette('palette-forest')">
                    <div class="color-preview forest-preview me-2"></div>
                    <span>Ambiance Forêt</span>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="selectPalette('palette-ocean')">
                    <div class="color-preview ocean-preview me-2"></div>
                    <span>Ambiance Océan</span>
                  </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="resetToDefaultLight()">
                    <div class="color-preview default-light-preview me-2"></div>
                    <span>Réinitialiser (Thème Clair)</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
// Importer votre logo ici
import headerLogo from '/img/Logo-head.png'; // <-- Change this path and filename!

export default {
  name: 'Header',
  data() {
    return {
      isDarkMode: false,
      isScrolled: false,
      headerLogo: headerLogo // Assigner l'image importée à une propriété de données
    };
  },
  mounted() {
    this.applySavedTheme();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    getAllPaletteClasses() {
      return [
        'palette-radix-light',
        'palette-radix-dark',
        'palette-forest',
        'palette-ocean'
      ];
    },
    isPaletteConsideredDark(paletteName) {
      return ['palette-radix-dark'].includes(paletteName);
    },
    applyThemeToBody(mode, palette = null) {
      document.body.classList.remove('dark-mode', ...this.getAllPaletteClasses());
      if (palette) {
        document.body.classList.add(palette);
        localStorage.setItem('currentPalette', palette);
        localStorage.removeItem('currentMode');
      } else {
        if (mode === 'dark') {
          document.body.classList.add('dark-mode');
        }
        localStorage.setItem('currentMode', mode);
        localStorage.removeItem('currentPalette');
      }
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.applyThemeToBody(this.isDarkMode ? 'dark' : 'light');
    },
    selectPalette(paletteName) {
      this.applyThemeToBody(null, paletteName);
      this.isDarkMode = this.isPaletteConsideredDark(paletteName);
    },
    resetToDefaultLight() {
      this.applyThemeToBody('light');
      this.isDarkMode = false;
    },
    applySavedTheme() {
      const savedMode = localStorage.getItem('currentMode');
      const savedPalette = localStorage.getItem('currentPalette');
      document.body.classList.remove('dark-mode', ...this.getAllPaletteClasses());
      if (savedPalette) {
        this.applyThemeToBody(null, savedPalette);
        this.isDarkMode = this.isPaletteConsideredDark(savedPalette);
      } else if (savedMode) {
        this.applyThemeToBody(savedMode);
        this.isDarkMode = savedMode === 'dark';
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.applyThemeToBody(prefersDark ? 'dark' : 'light');
        this.isDarkMode = prefersDark;
      }
    },
    updateIsDarkModeState(isDark) {
      this.isDarkMode = isDark;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
};
</script>

<style scoped>
/* Votre CSS existant pour l'en-tête */
.navbar {
  background-color: var(--background-alt-color) !important;
  transition: background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important;
  border-bottom: 1px solid var(--border-color) !important;
}
header.scrolled {
  background-color: rgba(var(--background-alt-color-rgb), 0.9) !important;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.15) !important;
}
/* Mettez à jour .navbar-brand pour un bon alignement avec l'image */
.navbar-brand {
  color: var(--text-primary) !important;
  display: flex; /* Utilisez flexbox pour aligner le logo et le texte */
  align-items: center; /* Centrer verticalement */
}
.navbar-brand:hover {
  color: var(--accent-color) !important;
}
.navbar-toggler-icon {
  background-image: var(--navbar-toggler-icon-filter);
}
.navbar-brand .fw-bold { /* Cibler spécifiquement le texte si vous le gardez */
  font-weight: 700;
  margin-left: 0; /* Réinitialiser la marge si elle était déjà définie sur .navbar-brand */
}

/* Nouveau style pour le logo */
.navbar-logo {
  height: 40px; /* Ajustez la hauteur selon vos besoins */
  width: auto; /* Maintient le ratio d'aspect */
  margin-right: 10px; /* Espace entre le logo et le texte/liens */
  vertical-align: middle; /* Assure un bon alignement */
}

/* Styles pour les liens de navigation */
.nav-link {
  color: var(--text-primary) !important;
}
.nav-link:hover {
  color: var(--accent-color) !important;
}

/* Styles pour les dropdowns de palette (existants) */
.dropdown-menu {
  background-color: var(--background-alt-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}
.dropdown-menu .dropdown-header,
.dropdown-menu .dropdown-item {
  color: var(--text-color) !important;
}
.dropdown-menu .dropdown-item:hover {
  background-color: var(--border-color) !important;
}
.dropdown-menu .dropdown-divider {
  border-top-color: var(--border-color);
}

.color-preview {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
}
.radix-light-preview { background-color: #F3D768; border-color: #d6b83f; }
.radix-dark-preview { background-color: #AB6400; border-color: #7b4700; }
.forest-preview { background-color: #2E8B57; border-color: #006400; }
.ocean-preview { background-color: #4682B4; border-color: #191970; }
.default-light-preview { background-color: #FFFFFF; border-color: #dee2e6; }
</style>