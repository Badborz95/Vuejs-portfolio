<template>
  <section id="projects" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 text-primary">Mes Projets</h2>

      <div id="projectCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators d-none"> 
          <button v-for="(project, index) in projects" :key="index"
                  type="button" :data-bs-target="`#projectCarousel`" :data-bs-slide-to="index"
                  :class="{ 'active': index === 0 }" :aria-current="index === 0 ? 'true' : null"
                  :aria-label="`Slide ${index + 1}`"></button>
        </div>

        <div class="carousel-inner">
          <div v-for="(project, index) in projects" :key="project.id"
               :class="['carousel-item', { 'active': index === 0 }]">
            <div class="card shadow-sm border-0 mx-auto" style="max-width: 900px;">
              <div class="row g-0">
                <div class="col-md-6">
                  <img :src="project.image" class="img-fluid rounded-start w-100 h-100 object-fit-cover" :alt="project.title">
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h3 class="card-title text-primary">{{ project.title }}</h3>
                    <p class="card-text text-muted">{{ project.description }}</p>
                    <div class="mb-3">
                      <span v-for="tech in project.technologies" :key="tech" class="badge bg-secondary me-2 mb-2">{{ tech }}</span>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                      <a :href="project.githubLink" target="_blank" class="btn btn-outline-primary btn-sm">
                        <i class="fab fa-github me-2"></i>Code Source
                      </a>
                      <a v-if="project.demoLink" :href="project.demoLink" target="_blank" class="btn btn-primary btn-sm">
                        <i class="fas fa-external-link-alt me-2"></i>Voir la démo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
const projectsData = [
  {
    id: 1,
    title: "PortFolio HTML/CSS/JS",
    description: "Un portfolio personnel développé avec HTML, CSS et JavaScript, mettant en avant mes projets et compétences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/img/project-portfolio.png", // Assure-toi que les chemins d'images sont corrects
    githubLink: "https://github.com/Badborz95/Portfolio-HTML-CSS-JS",
    demoLink: "https://super-dragon-cdcca5.netlify.app/"
  },
  {
    id: 2,
    title: "Site presse html/css",
    description: "Un site vitrine développé avec HTML et CSS, mettant en avant les actualités et articles d'une presse en ligne.",
    technologies: ["HTML", "CSS"],
    image: "/img/project-site-presse.png", // Assure-toi que les chemins d'images sont corrects
    githubLink: "https://github.com/Badborz95/Site-presse",
    demoLink: "https://pressfly.netlify.app/"
  },
  {
    id: 3,
    title: "InstantGeek - site vente de jeux vidéo VueJS",
    description: "Un site e-commerce développé avec Vue.js, permettant de vendre des jeux vidéo en ligne. Realisé en groupe durant la POE.",
    technologies: ["Vue.js", "Vue Router", "Vuex", "Firebase", "Bootstrap", "Pinia"],
    image: "/img/project-instantgeek.png", // Assure-toi que les chemins d'images sont corrects
    githubLink: "https://github.com/Badborz95/projet-groupe",
    demoLink: "https://instantgeek.netlify.app/"
  },
  {
    id: 4,
    title: "Site de ventes de jeux vidéo HTML/CSS/JS",
    description: "Un site de ventes de jeux vidéo développé durant la POE avec HTML, CSS et JavaScript. Il permet aux utilisateurs de parcourir et acheter des jeux. un exercice personnel.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/img/Gemu-Store.png",
    githubLink: "https://github.com/Badborz95/Gemustore",
    demoLink: "https://gemustory.netlify.app/"
  }
];

export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: projectsData,
    };
  }
};
</script>

<style scoped>
/* Pas de styles spécifiques pour le carrousel, Bootstrap gère tout */
.object-fit-cover {
  object-fit: cover;
}
.h-100 {
  height: 100%;
}

/* --- NOUVEAU STYLE POUR MASQUER LES INDICATEURS --- */
/* Masque complètement les indicateurs du carrousel */
.carousel-indicators {
  display: none !important;
}
</style>