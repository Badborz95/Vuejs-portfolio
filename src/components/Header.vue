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

          <li class="nav-item ms-lg-3 d-flex align-items-center">
            <button @click="toggleDarkMode" class="btn btn-outline-secondary btn-sm rounded-pill d-flex align-items-center px-3 py-1 me-2">
              <i :class="['me-2', isDarkMode ? 'fas fa-sun' : 'fas fa-moon']"></i>
              <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
            </button>

            <div class="dropdown d-lg-none"> <button class="btn btn-outline-secondary btn-sm rounded-circle dropdown-toggle" type="button" id="paletteDropdownMobile" data-bs-toggle="dropdown" aria-expanded="false" title="Choisir une ambiance">
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
export default {
  name: 'Header',
  data() {
    return {
      isDarkMode: false, // Controls the 'dark-mode' class for the default theme
      isScrolled: false // Variable for scroll effect
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
    // Helper to get all known palette classes (update this if you add more palettes)
    getAllPaletteClasses() {
      return [
        'palette-radix-light',
        'palette-radix-dark',
        'palette-forest',
        'palette-ocean'
      ];
    },
    // Determines if a given palette name is considered "dark"
    isPaletteConsideredDark(paletteName) {
      return ['palette-radix-dark'].includes(paletteName); // Customize this array!
    },

    // --- Core Theme Application Logic ---
    applyThemeToBody(mode, palette = null) {
      // 1. Remove all existing theme-related classes
      document.body.classList.remove('dark-mode', ...this.getAllPaletteClasses());

      if (palette) {
        // 2a. Apply specific palette
        document.body.classList.add(palette);
        localStorage.setItem('currentPalette', palette);
        localStorage.removeItem('currentMode'); // Palette takes precedence
      } else {
        // 2b. Apply basic light/dark mode
        if (mode === 'dark') {
          document.body.classList.add('dark-mode');
        }
        localStorage.setItem('currentMode', mode);
        localStorage.removeItem('currentPalette'); // Basic mode takes precedence
      }
    },

    // --- Header Button Actions ---
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.applyThemeToBody(this.isDarkMode ? 'dark' : 'light');
    },
    selectPalette(paletteName) {
      this.applyThemeToBody(null, paletteName);
      // Update header button's state based on the selected palette's 'darkness'
      this.isDarkMode = this.isPaletteConsideredDark(paletteName);
    },
    resetToDefaultLight() {
      this.applyThemeToBody('light');
      this.isDarkMode = false;
    },

    // --- Initial Load Logic ---
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

    // Method to be called externally (from PortfolioPage)
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
/* Your existing Header scoped styles */
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
.navbar-brand, .nav-link {
  color: var(--text-primary) !important;
}
.navbar-brand:hover, .nav-link:hover {
  color: var(--accent-color) !important;
}
.navbar-toggler-icon {
  background-image: var(--navbar-toggler-icon-filter);
}
.navbar-brand.fw-bold {
  font-weight: 700;
}

/* Styles for the palette dropdowns */
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

/* Color previews - ensure these are defined! */
.color-preview {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
}
.radix-light-preview { background-color: #F3D768; border-color: #d6b83f; }
.radix-dark-preview { background-color: #AB6400; border-color: #7b4700; }
.forest-preview { background-color: #2E8B57; border-color: #006400; }
.ocean-preview { background-color: #4682B4; border-color: #191970; } /* Using ADD8E6 from main.css */
.default-light-preview { background-color: #FFFFFF; border-color: #dee2e6; }
</style>