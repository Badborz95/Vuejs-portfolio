<template>
  <section id="contact" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 text-primary">Me Contacter</h2>
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <p class="lead mb-4">N'hésitez pas à me contacter si vous avez des questions, des opportunités d'alternance ou simplement pour échanger !</p>
          <div class="d-flex flex-column align-items-center mb-4">
            <p class="mb-2 fs-5"><i class="fas fa-envelope text-primary me-3"></i> Email : <a href="mailto:turpal.ali.djabrailov@gmail.com" class="text-decoration-none text-dark">turpal.ali.djabrailov@gmail.com</a></p>
            <p class="mb-2 fs-5"><i class="fab fa-linkedin text-primary me-3"></i> LinkedIn : <a href="https://www.linkedin.com/in/djabrailovturpal/" target="_blank" class="text-decoration-none text-dark">linkedin.com/in/djabrailovturpal</a></p>
            <p class="mb-0 fs-5"><i class="fab fa-github text-primary me-3"></i> GitHub : <a href="https://github.com/Badborz95" target="_blank" class="text-decoration-none text-dark">github.com/Badborz95</a></p>
          </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
};
</script>

<style scoped>
/* Les liens de contact */
.contact-info p a:hover {
  text-decoration: underline !important; /* Force l'underline si Bootstrap le supprime */
}
</style>