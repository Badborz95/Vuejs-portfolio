<template>
  <transition name="fade">
    <button v-if="isVisible" @click="scrollToTop" class="btn btn-primary rounded-circle shadow-lg position-fixed bottom-0 end-0 m-4 p-3 z-index-scroll">
      <i class="fas fa-arrow-up fa-2x"></i>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'ScrollToTopButton',
  data() {
    return {
      isVisible: false
    };
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
/* Pas de styles custom majeurs, Bootstrap gère la position et le style du bouton */
.z-index-scroll {
  z-index: 999;
}
/* Animation de transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>