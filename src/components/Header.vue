<template>
  <header :class="['navbar navbar-expand-lg fixed-top', { 'scrolled': isScrolled }]">
    <div class="container">

      <!-- Brand -->
      <a class="navbar-brand d-flex align-items-center" href="#hero">
        <img
          :src="isDarkMode ? darkLogo : lightLogo"
          alt="Logo de Djabrailov Turpal"
          class="navbar-logo me-2"
        />
        <span class="fw-bold">Djabrailov Turpal</span>
      </a>

      <!-- Toggler mobile -->
      <button class="navbar-toggler border-0 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="toggler-bar"></span>
        <span class="toggler-bar"></span>
        <span class="toggler-bar"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-center gap-1">
          <li class="nav-item" v-for="link in navLinks" :key="link.href">
            <a class="nav-link" :href="link.href">{{ link.label }}</a>
          </li>

          <!-- Dark mode toggle -->
          <li class="nav-item ms-lg-2">
            <button @click="toggleDarkMode" class="theme-toggle-btn" :aria-label="isDarkMode ? 'Passer en clair' : 'Passer en sombre'">
              <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
              <span>{{ isDarkMode ? 'Light' : 'Dark' }}</span>
            </button>
          </li>

          <!-- Palette mobile only -->
          <li class="nav-item d-lg-none">
            <div class="dropdown">
              <button class="palette-mobile-btn dropdown-toggle" type="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-palette"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-end palette-dropdown">
                <li><h6 class="dropdown-header"><i class="fas fa-swatchbook me-2"></i>Ambiances</h6></li>
                <li><hr class="dropdown-divider"></li>
                <li v-for="p in palettes" :key="p.value">
                  <a class="dropdown-item d-flex align-items-center gap-2" href="#" @click.prevent="selectPalette(p.value)">
                    <span class="palette-dot" :style="{ background: p.color }"></span>
                    {{ p.label }}
                  </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item d-flex align-items-center gap-2" href="#" @click.prevent="resetToDefaultLight()">
                    <span class="palette-dot" style="background:#fff; border:1px solid #dee2e6"></span>
                    Réinitialiser
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
      isDarkMode: false,
      isScrolled: false,
      darkLogo: '/img/logoTDLight.png',
      lightLogo: '/img/logoTDDark.png',
      navLinks: [
        { href: '#hero',     label: 'Accueil' },
        { href: '#about',    label: 'À Propos' },
        { href: '#projects', label: 'Projets' },
        { href: '#timeline', label: 'Parcours' },
        { href: '#contact',  label: 'Contact' }
      ],
      palettes: [
        { value: 'palette-radix-light', label: 'Radix UI Clair',  color: '#F3D768' },
        { value: 'palette-radix-dark',  label: 'Radix UI Sombre', color: '#AB6400' },
        { value: 'palette-forest',      label: 'Forêt',           color: '#2E8B57' },
        { value: 'palette-ocean',       label: 'Océan',           color: '#4682B4' }
      ]
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
      return ['palette-radix-light', 'palette-radix-dark', 'palette-forest', 'palette-ocean'];
    },
    isPaletteConsideredDark(p) { return ['palette-radix-dark'].includes(p); },
    applyThemeToBody(mode, palette = null) {
      document.body.classList.remove('dark-mode', ...this.getAllPaletteClasses());
      if (palette) {
        document.body.classList.add(palette);
        localStorage.setItem('currentPalette', palette);
        localStorage.removeItem('currentMode');
      } else {
        if (mode === 'dark') document.body.classList.add('dark-mode');
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
      const savedPalette = localStorage.getItem('currentPalette');
      const savedMode = localStorage.getItem('currentMode');
      document.body.classList.remove('dark-mode', ...this.getAllPaletteClasses());
      if (savedPalette) {
        this.applyThemeToBody(null, savedPalette);
        this.isDarkMode = this.isPaletteConsideredDark(savedPalette);
      } else if (savedMode) {
        this.applyThemeToBody(savedMode);
        this.isDarkMode = savedMode === 'dark';
      } else {
        const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        this.applyThemeToBody(prefersDark ? 'dark' : 'light');
        this.isDarkMode = prefersDark;
      }
    },
    updateIsDarkModeState(isDark) { this.isDarkMode = isDark; },
    handleScroll() { this.isScrolled = window.scrollY > 50; }
  }
};
</script>

<style scoped>
/* ===== NAVBAR BASE ===== */
.navbar {
  background-color: var(--background-alt-color, #ffffff) !important;
  border-bottom: 1px solid var(--border-color, #e9ecef);
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease;
  padding: 0.6rem 0;
}

.navbar.scrolled {
  /* Utilise la variable du thème au lieu du blanc fixe */
  background-color: var(--background-alt-color, #ffffff) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08) !important;
  opacity: 0.95;
}

/* ===== BRAND ===== */
.navbar-brand {
  text-decoration: none;
}

.navbar-logo {
  height: 38px;
  width: auto;
}

.brand-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color, #212529);
  letter-spacing: 0.2px;
}

.brand-accent {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

/* ===== NAV LINKS ===== */
.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-color, #495057) !important;
  padding: 0.4rem 0.7rem !important;
  border-radius: 8px;
  transition: color 0.2s ease, background 0.2s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 70%;
  height: 2px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 2px;
  transition: transform 0.25s ease;
}

.nav-link:hover {
  color: #667eea !important;
  background: rgba(102, 126, 234, 0.07);
}

.nav-link:hover::after {
  transform: translateX(-50%) scaleX(1);
}

/* ===== DARK MODE BUTTON ===== */
.theme-toggle-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  border: 1.5px solid var(--border-color, #dee2e6);
  background: transparent;
  color: var(--text-color, #495057);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.theme-toggle-btn:hover {
  border-color: #667eea;
  color: #667eea;
  background: rgba(102, 126, 234, 0.07);
}

/* ===== MOBILE TOGGLER ===== */
.toggler-bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-color, #495057);
  border-radius: 2px;
  transition: all 0.3s ease;
  margin: 4px 0;
}

.navbar-toggler:focus {
  box-shadow: none;
}

/* ===== PALETTE MOBILE ===== */
.palette-mobile-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid var(--border-color, #dee2e6);
  background: transparent;
  color: var(--text-color, #495057);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.palette-mobile-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.palette-dropdown {
  background: var(--background-alt-color, #fff);
  border: 1px solid var(--border-color, #e9ecef);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  padding: 8px;
  min-width: 210px;
}

.palette-dropdown .dropdown-header {
  color: var(--text-color, #6c757d);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.palette-dropdown .dropdown-item {
  color: var(--text-color, #343a40);
  border-radius: 8px;
  font-size: 0.87rem;
  font-weight: 500;
  padding: 7px 10px;
  transition: background 0.2s ease;
}

.palette-dropdown .dropdown-item:hover {
  background: rgba(102, 126, 234, 0.08);
  color: #667eea;
}

.palette-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
}
</style>