<template>
  <footer class="bg-dark text-white text-center py-4">
    <div class="container">
      <p class="mb-2">&copy; {{ currentYear }} Turpal-Ali DJABRAILOV. Tous droits réservés.</p>
      <div class="social-links fs-4">
        <a href="https://www.linkedin.com/in/djabrailovturpal/" target="_blank" aria-label="LinkedIn" class="text-white mx-2"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/Badborz95" target="_blank" aria-label="GitHub" class="text-white mx-2"><i class="fab fa-github"></i></a>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.social-links a:hover {
  color: #007bff !important; /* Force la couleur au survol */
}
</style>