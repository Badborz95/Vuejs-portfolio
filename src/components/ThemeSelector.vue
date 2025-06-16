<template>
  <div
    class="theme-selector-container"
    :style="{ top: y + 'px', left: x + 'px' }"
    @mousedown="startDrag"
    @touchstart="startDrag"
  >
    <button @click="toggleMenu" class="btn btn-primary rounded-circle shadow-lg theme-toggle-btn">
      <i class="fas fa-palette"></i>
    </button>

    <div v-if="isMenuOpen" class="theme-menu shadow-lg rounded">
      <h6>Choisir une ambiance</h6>
      <hr>

      <div class="theme-option" @click="selectPalette('palette-radix-light')">
        <div class="color-preview radix-light-preview me-2"></div>
        <span>Ambiance Radix UI (Clair)</span>
      </div>
      <div class="theme-option" @click="selectPalette('palette-radix-dark')">
        <div class="color-preview radix-dark-preview me-2"></div>
        <span>Ambiance Radix UI (Sombre)</span>
      </div>
      <div class="theme-option" @click="selectPalette('palette-forest')">
        <div class="color-preview forest-preview me-2"></div>
        <span>Ambiance Forêt</span>
      </div>
      <div class="theme-option" @click="selectPalette('palette-ocean')">
        <div class="color-preview ocean-preview me-2"></div>
        <span>Ambiance Océan</span>
      </div>
      <div class="theme-option" @click="resetToDefaultLight()">
        <div class="color-preview default-light-preview me-2"></div>
        <span>Réinitialiser</span>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeSelector',
  data() {
    return {
      isMenuOpen: false,
      isDragging: false,
      x: 20,
      y: 100,
      offsetX: 0,
      offsetY: 0,
    };
  },
  mounted() {
    const savedX = localStorage.getItem('themeSelectorX');
    const savedY = localStorage.getItem('themeSelectorY');
    if (savedX) this.x = parseInt(savedX);
    if (savedY) this.y = parseInt(savedY);

    this.isMenuOpen = false;

    // Add event listeners for both mouse and touch
    window.addEventListener('mousemove', this.doDrag);
    window.addEventListener('mouseup', this.stopDrag);
    window.addEventListener('touchmove', this.doDrag, { passive: false }); // { passive: false } to allow preventDefault
    window.addEventListener('touchend', this.stopDrag);
    window.addEventListener('touchcancel', this.stopDrag);
  },
  beforeUnmount() {
    // Remove all event listeners
    window.removeEventListener('mousemove', this.doDrag);
    window.removeEventListener('mouseup', this.stopDrag);
    window.removeEventListener('touchmove', this.doDrag);
    window.removeEventListener('touchend', this.stopDrag);
    window.removeEventListener('touchcancel', this.stopDrag);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    startDrag(e) {
      this.isDragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      this.offsetX = clientX - this.x;
      this.offsetY = clientY - this.y;

      e.preventDefault(); // Prevent default browser behavior (e.g., text selection on mousedown, scrolling on touchstart)
    },
    doDrag(e) {
      if (this.isDragging) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        let newX = clientX - this.offsetX;
        let newY = clientY - this.offsetY;

        // Boundary checks to keep it within the viewport
        newX = Math.max(0, Math.min(newX, window.innerWidth - this.$el.offsetWidth));
        newY = Math.max(0, Math.min(newY, window.innerHeight - this.$el.offsetHeight));

        this.x = newX;
        this.y = newY;
        localStorage.setItem('themeSelectorX', this.x);
        localStorage.setItem('themeSelectorY', this.y);

        // Prevent default scrolling on touch devices during drag
        if (e.type === 'touchmove') {
          e.preventDefault();
        }
      }
    },
    stopDrag() {
      this.isDragging = false;
    },
    selectPalette(paletteName) {
      // Remove all basic mode and other palette classes
      document.body.classList.remove(
        'dark-mode',
        'palette-radix-light',
        'palette-radix-dark',
        'palette-forest',
        'palette-ocean'
        // Add any other palette classes you create here
      );

      // Apply the selected palette class
      document.body.classList.add(paletteName);

      // Update localStorage
      localStorage.setItem('currentPalette', paletteName);
      localStorage.removeItem('currentMode'); // A palette is active, so clear basic mode preference
      this.isMenuOpen = false;
    },
    resetToDefaultLight() {
      document.body.classList.remove(
        'dark-mode',
        'palette-radix-light',
        'palette-radix-dark',
        'palette-forest',
        'palette-ocean'
      );
      localStorage.setItem('currentMode', 'light');
      localStorage.removeItem('currentPalette');
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
.theme-selector-container {
  position: fixed;
  z-index: 1050;
  cursor: grab; /* For desktop */
  user-select: none;
  top: 100px;
  left: 20px;
  /* Add smooth transition for movement */
  transition: top 0.2s ease-out, left 0.2s ease-out; /* Adjusted for smoother feel */
}

/* Optional: Remove grab cursor for touch devices if preferred */
@media (hover: none) and (pointer: coarse) {
  .theme-selector-container {
    cursor: default; /* No specific cursor for touch */
  }
}

.theme-toggle-btn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: white;
}

.theme-menu {
  position: absolute;
  top: 60px;
  left: 0;
  min-width: 250px;
  background-color: var(--background-alt-color);
  border: 1px solid var(--border-color);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: var(--text-color);
}

.theme-menu h6 {
  color: var(--text-color);
  margin-bottom: 10px;
}

.theme-menu hr {
  border-color: var(--border-color);
  margin: 10px 0;
}

.theme-option {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 5px;
  margin-bottom: 5px;
}

.theme-option:hover {
  background-color: var(--border-color);
}

.color-preview {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
}

/* Previews for the ambiance palettes */
.radix-light-preview { background-color: #F3D768; border-color: #d6b83f; }
.radix-dark-preview { background-color: #AB6400; border-color: #7b4700; }
.forest-preview { background-color: #2E8B57; border-color: #006400; }
.ocean-preview { background-color: #4682B4; border-color: #191970; }
.default-light-preview { background-color: #FFFFFF; border-color: #dee2e6; }
</style>