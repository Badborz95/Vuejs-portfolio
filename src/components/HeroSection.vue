<template>
  <section id="hero" class="d-flex align-items-center justify-content-center text-center text-dark py-5 vh-100 bg-light-blue">
    <div class="container">
      <img src="/img/hero.jpg" alt="Ta photo de profil" class="img-fluid rounded-circle border border-5 border-5 border-white shadow-lg mb-4" style="width: 180px; height: 180px; object-fit: cover;">
      <h1 class="display-4 fw-bold mb-3 text-primary">Salut, je suis Turpal DJABRAILOV</h1>
      <p class="lead mb-3 text-muted">Développeur Web passionné et futur alternant en Licence Concepteur Développeur d'Applications.</p>
      
      <div class="social-icons mb-4">
        <a href="https://github.com/Badborz95" target="_blank" rel="noopener noreferrer" class="social-icon me-3">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/djabrailovturpal/" target="_blank" rel="noopener noreferrer" class="social-icon">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
      </div>

      <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
        <a href="#projects" class="btn btn-primary btn-lg px-4 rounded-pill">Voir mes projets</a>
        <a href="#contact" class="btn btn-outline-primary btn-lg px-4 rounded-pill">Me contacter</a>
        <a href="/doc/Turpal-CV.pdf" download="Turpal-CV.pdf" class="btn btn-success btn-lg px-4 rounded-pill">
          <i class="fas fa-download me-2"></i> Télécharger CV
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style scoped>
.bg-light-blue {
  background: var(--hero-background) !important;
  transition: background 0.4s ease;
}

/* Styles for social icons */
.social-icons .social-icon {
  color: var(--text-primary); /* Use primary text color by default */
  transition: color 0.3s ease; /* Smooth transition for hover effect */
}

.social-icons .social-icon:hover {
  color: var(--accent-color); /* Change to accent color on hover */
}
</style>