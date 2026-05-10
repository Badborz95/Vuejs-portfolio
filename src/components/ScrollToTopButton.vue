<template>
  <transition name="scroll-top">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-top-btn"
      aria-label="Retour en haut"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'ScrollToTopButton',
  data() {
    return { isVisible: false };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #ffffff;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.45);
  transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
}

.scroll-top-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  opacity: 0;
  transform: scale(1.4);
  transition: opacity 0.4s ease, transform 0.4s ease;
  z-index: -1;
}

.scroll-top-btn:hover {
  transform: translateY(-4px) scale(1.08);
  box-shadow: 0 8px 28px rgba(102, 126, 234, 0.55);
}

.scroll-top-btn:hover::before {
  opacity: 0.2;
  transform: scale(1.6);
}

.scroll-top-btn:active {
  transform: scale(0.93);
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
}

/* Animation apparition / disparition */
.scroll-top-enter-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.scroll-top-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.scroll-top-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.7);
}
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.85);
}
</style>