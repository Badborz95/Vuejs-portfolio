<template>
  <div
    class="theme-selector-container d-none d-lg-block"
    :style="{ top: y + 'px', left: x + 'px' }"
    @mousedown="startDrag"
    @touchstart="startDrag"
  >
    <!-- Bouton principal -->
    <button @click="handleToggleAndDrag" class="theme-toggle-btn" :class="{ 'active': isMenuOpen }" aria-label="Choisir un thème">
      <i class="fas fa-palette"></i>
    </button>

    <!-- Menu -->
    <transition name="menu-pop">
      <div v-if="isMenuOpen" class="theme-menu">
        <div class="theme-menu-header">
          <i class="fas fa-swatchbook me-2"></i>
          <span>Ambiances</span>
        </div>

        <div class="theme-options">
          <div class="theme-option" @click="selectPalette('palette-radix-light')">
            <div class="color-dot radix-light-preview"></div>
            <span>Radix UI Clair</span>
            <i class="fas fa-sun option-icon"></i>
          </div>
          <div class="theme-option" @click="selectPalette('palette-radix-dark')">
            <div class="color-dot radix-dark-preview"></div>
            <span>Radix UI Sombre</span>
            <i class="fas fa-moon option-icon"></i>
          </div>
          <div class="theme-option" @click="selectPalette('palette-forest')">
            <div class="color-dot forest-preview"></div>
            <span>Forêt</span>
            <i class="fas fa-leaf option-icon"></i>
          </div>
          <div class="theme-option" @click="selectPalette('palette-ocean')">
            <div class="color-dot ocean-preview"></div>
            <span>Océan</span>
            <i class="fas fa-water option-icon"></i>
          </div>

          <div class="theme-divider"></div>

          <div class="theme-option reset-option" @click="resetToDefaultLight()">
            <div class="color-dot default-light-preview"></div>
            <span>Réinitialiser</span>
            <i class="fas fa-rotate-left option-icon"></i>
          </div>
        </div>
      </div>
    </transition>
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
      initialClientX: 0,
      initialClientY: 0,
      dragThreshold: 5,
    };
  },
  mounted() {
    const savedX = localStorage.getItem('themeSelectorX');
    const savedY = localStorage.getItem('themeSelectorY');
    if (savedX) this.x = parseInt(savedX);
    if (savedY) this.y = parseInt(savedY);
    this.isMenuOpen = false;
    window.addEventListener('mousemove', this.doDrag);
    window.addEventListener('mouseup', this.stopDrag);
    window.addEventListener('touchmove', this.doDrag, { passive: false });
    window.addEventListener('touchend', this.stopDrag);
    window.addEventListener('touchcancel', this.stopDrag);
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.doDrag);
    window.removeEventListener('mouseup', this.stopDrag);
    window.removeEventListener('touchmove', this.doDrag);
    window.removeEventListener('touchend', this.stopDrag);
    window.removeEventListener('touchcancel', this.stopDrag);
  },
  methods: {
    getAllPaletteClasses() {
      return ['palette-radix-light', 'palette-radix-dark', 'palette-forest', 'palette-ocean'];
    },
    isPaletteConsideredDark(paletteName) {
      return ['palette-radix-dark'].includes(paletteName);
    },
    handleToggleAndDrag(e) {
      const clientX = e.touches ? e.changedTouches[0].clientX : e.clientX;
      const clientY = e.touches ? e.changedTouches[0].clientY : e.clientY;
      const deltaX = Math.abs(clientX - this.initialClientX);
      const deltaY = Math.abs(clientY - this.initialClientY);
      if (deltaX > this.dragThreshold || deltaY > this.dragThreshold) return;
      this.toggleMenu();
    },
    toggleMenu() { this.isMenuOpen = !this.isMenuOpen; },
    startDrag(e) {
      this.isDragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      this.offsetX = clientX - this.x;
      this.offsetY = clientY - this.y;
      this.initialClientX = clientX;
      this.initialClientY = clientY;
      if (e.type === 'touchstart') e.preventDefault();
    },
    doDrag(e) {
      if (this.isDragging) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        let newX = clientX - this.offsetX;
        let newY = clientY - this.offsetY;
        newX = Math.max(0, Math.min(newX, window.innerWidth - this.$el.offsetWidth));
        newY = Math.max(0, Math.min(newY, window.innerHeight - this.$el.offsetHeight));
        this.x = newX;
        this.y = newY;
        localStorage.setItem('themeSelectorX', this.x);
        localStorage.setItem('themeSelectorY', this.y);
        if (e.type === 'touchmove') e.preventDefault();
      }
    },
    stopDrag() { this.isDragging = false; },
    selectPalette(paletteName) {
      document.body.classList.remove('dark-mode', ...this.getAllPaletteClasses());
      document.body.classList.add(paletteName);
      localStorage.setItem('currentPalette', paletteName);
      localStorage.removeItem('currentMode');
      this.$emit('palette-selected', this.isPaletteConsideredDark(paletteName));
      this.isMenuOpen = false;
    },
    resetToDefaultLight() {
      document.body.classList.remove('dark-mode', ...this.getAllPaletteClasses());
      localStorage.setItem('currentMode', 'light');
      localStorage.removeItem('currentPalette');
      this.isMenuOpen = false;
      this.$emit('reset-to-light');
    }
  }
};
</script>

<style scoped>
.theme-selector-container {
  position: fixed;
  z-index: 1050;
  cursor: grab;
  user-select: none;
}

.theme-selector-container:active {
  cursor: grabbing;
}

@media (max-width: 991.98px) {
  .theme-selector-container { display: none !important; }
}

/* ===== BOUTON PRINCIPAL ===== */
.theme-toggle-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  background: linear-gradient(135deg, #667eea, #764ba2);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.45);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  position: relative;
}

.theme-toggle-btn::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 2px solid rgba(102, 126, 234, 0.35);
  opacity: 0;
  transition: opacity 0.25s ease, transform 0.25s ease;
  transform: scale(0.85);
}

.theme-toggle-btn:hover {
  transform: scale(1.08) rotate(15deg);
  box-shadow: 0 6px 24px rgba(102, 126, 234, 0.55);
}

.theme-toggle-btn.active {
  transform: rotate(30deg);
  box-shadow: 0 6px 24px rgba(102, 126, 234, 0.55);
}

.theme-toggle-btn.active::after {
  opacity: 1;
  transform: scale(1);
}

/* ===== MENU ===== */
.theme-menu {
  position: absolute;
  top: 62px;
  left: 0;
  min-width: 230px;
  background: var(--background-alt-color, #ffffff);
  border: 1px solid var(--border-color, #e9ecef);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);
}

.theme-menu-header {
  padding: 12px 16px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-muted-color, #6c757d);
  background: linear-gradient(135deg, rgba(102,126,234,0.07), rgba(118,75,162,0.07));
  border-bottom: 1px solid var(--border-color, #e9ecef);
  display: flex;
  align-items: center;
}

.theme-options {
  padding: 8px;
}

/* ===== OPTIONS ===== */
.theme-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
  font-size: 0.88rem;
  color: var(--text-color, #343a40);
}

.theme-option:hover {
  background: linear-gradient(135deg, rgba(102,126,234,0.09), rgba(118,75,162,0.09));
}

.theme-option span {
  flex: 1;
  font-weight: 500;
}

.option-icon {
  font-size: 0.78rem;
  color: var(--text-muted-color, #adb5bd);
}

.reset-option {
  color: var(--text-muted-color, #6c757d);
}

.reset-option:hover {
  background: rgba(220, 53, 69, 0.07);
}

.theme-divider {
  height: 1px;
  background: var(--border-color, #e9ecef);
  margin: 6px 0;
}

/* ===== DOTS COULEUR ===== */
.color-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
  border: 2px solid rgba(255,255,255,0.6);
}

.radix-light-preview { background: #F3D768; }
.radix-dark-preview  { background: #AB6400; }
.forest-preview      { background: #2E8B57; }
.ocean-preview       { background: #4682B4; }
.default-light-preview { background: #ffffff; border-color: #dee2e6; }

/* ===== ANIMATION MENU ===== */
.menu-pop-enter-active {
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.menu-pop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.menu-pop-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.92);
}
.menu-pop-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.95);
}
</style>