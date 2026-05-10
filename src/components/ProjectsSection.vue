<template>
  <section id="projects" class="py-5 projects-section">
    <div class="container">
      <h2 class="text-center mb-2 section-title">Mes Projets</h2>
      <p class="text-center text-muted mb-5">Une sélection de mes réalisations personnelles et professionnelles</p>

      <div id="projectCarousel" class="carousel slide" data-bs-ride="false">

        <div class="carousel-inner">
          <div v-for="(project, index) in projects" :key="project.id"
               :class="['carousel-item', { 'active': index === 0 }]">

            <div class="project-card mx-auto">
              <div class="row g-0 align-items-stretch">

                <!-- Image -->
                <div class="col-md-5 project-image-col">
                  <div class="project-image-wrapper">
                    <img :src="project.image" class="project-image" :alt="project.title">
                    <div class="project-image-overlay">
                      <span class="project-counter">{{ index + 1 }} / {{ projects.length }}</span>
                    </div>
                  </div>
                </div>

                <!-- Contenu -->
                <div class="col-md-7">
                  <div class="project-body">

                    <span class="project-type-badge" :class="project.type === 'pro' ? 'badge-pro' : 'badge-perso'">
                      <i :class="project.type === 'pro' ? 'fas fa-briefcase' : 'fas fa-code'" class="me-1"></i>
                      {{ project.type === 'pro' ? 'Projet professionnel' : 'Projet personnel' }}
                    </span>

                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-description">{{ project.description }}</p>

                    <div class="project-techs mb-4">
                      <span v-for="tech in project.technologies" :key="tech" class="tech-badge">{{ tech }}</span>
                    </div>

                    <div class="project-actions">
                      <a v-if="project.githubLink" :href="project.githubLink" target="_blank" class="btn-project btn-github">
                        <i class="fab fa-github me-2"></i>Code Source
                      </a>
                      <a v-if="project.demoLink" :href="project.demoLink" target="_blank" class="btn-project btn-demo">
                        <i class="fas fa-external-link-alt me-2"></i>Voir la démo
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contrôles -->
        <div class="carousel-controls">
          <button class="custom-control" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="carousel-dots">
            <button v-for="(project, index) in projects" :key="index"
              type="button"
              :data-bs-target="'#projectCarousel'"
              :data-bs-slide-to="index"
              :class="['carousel-dot', { 'active': index === activeIndex }]"
              :aria-label="`Projet ${index + 1}`">
            </button>
          </div>
          <button class="custom-control" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
const projectsData = [
  {
    id: 1, type: "perso",
    title: "Portfolio HTML/CSS/JS",
    description: "Un portfolio personnel développé avec HTML, CSS et JavaScript, mettant en avant mes projets et compétences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/img/project-portfolio.png",
    githubLink: "https://github.com/Badborz95/Portfolio-HTML-CSS-JS",
    demoLink: "https://super-dragon-cdcca5.netlify.app/"
  },
  {
    id: 2, type: "perso",
    title: "Site presse HTML/CSS",
    description: "Un site vitrine développé avec HTML et CSS, mettant en avant les actualités d'une presse en ligne.",
    technologies: ["HTML", "CSS"],
    image: "/img/project-site-presse.png",
    githubLink: "https://github.com/Badborz95/Site-presse",
    demoLink: "https://pressfly.netlify.app/"
  },
  {
    id: 3, type: "perso",
    title: "Site Librairie HTML/CSS/JS",
    description: "Un site de librairie en ligne permettant aux utilisateurs de parcourir et acheter des livres.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/img/Livre-Ouvert.png",
    githubLink: "https://github.com/Badborz95/site-livres",
    demoLink: "https://bookyclub.netlify.app/"
  },
  {
    id: 4, type: "pro",
    title: "InstantGeek - Vente de jeux vidéo VueJS",
    description: "Un site e-commerce développé avec Vue.js, permettant de vendre des jeux vidéo en ligne. Réalisé en groupe durant la POE.",
    technologies: ["Vue.js", "Vue Router", "Vuex", "Firebase", "Bootstrap", "Pinia"],
    image: "/img/project-instantgeek.png",
    githubLink: "https://github.com/Badborz95/projet-groupe",
    demoLink: "https://instantgeek.netlify.app/"
  },
  {
    id: 5, type: "perso",
    title: "GemuStore - Vente de jeux vidéo",
    description: "Un site de ventes de jeux vidéo développé durant la POE avec HTML, CSS et JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/img/Gemu-Store.png",
    githubLink: "https://github.com/Badborz95/Gemustore",
    demoLink: "https://gemustory.netlify.app/"
  },
  {
    id: 6, type: "perso",
    title: "Knight's Quest - Jeu GODOT",
    description: "Un jeu d'aventure développé avec le moteur Godot, où le joueur incarne un chevalier en quête de sauver son royaume.",
    technologies: ["Godot", "GDScript"],
    image: "/img/Knight.png",
    githubLink: "https://github.com/Badborz95/Godot-projet",
    demoLink: "https://badborz95.itch.io/knights-story"
  },
  {
    id: 7, type: "pro",
    title: "DawanSkills - Plateforme de formation",
    description: "Plateforme de formation en ligne développée en alternance chez Dawan. Développement de fonctionnalités, correction de bugs, amélioration UI et mise en conformité RGPD.",
    technologies: ["Angular", "Spring Boot", "Java", "MariaDB", "Bootstrap", "TypeScript", "Git", "SQL"],
    image: "/img/DawanSkills.png",
    demoLink: "https://skills.dawan.fr/#/"
  }
];

export default {
  name: 'ProjectsSection',
  data() {
    return { projects: projectsData,
      activeIndex: 0 
     };
  },
  mounted() {
  const carousel = document.getElementById('projectCarousel');
  this._onSlide = (e) => {
    this.activeIndex = e.to;
  };
  carousel.addEventListener('slide.bs.carousel', this._onSlide);
  },
  beforeUnmount() {
    const carousel = document.getElementById('projectCarousel');
    if (carousel) carousel.removeEventListener('slide.bs.carousel', this._onSlide);
  }
};
</script>

<style scoped>
.projects-section {
  background: var(--background-color, #f8f9fa);
}
.section-title {
  color: var(--primary-color, #667eea);
  font-weight: 700;
  font-size: 1.8rem;
}
.project-card {
  max-width: 900px;
  background: var(--background-alt-color, #ffffff);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(102, 126, 234, 0.10);
  border: 1px solid var(--border-color, #e9ecef);
  transition: box-shadow 0.3s ease;
}
.project-card:hover {
  box-shadow: 0 8px 40px rgba(102, 126, 234, 0.18);
}
.project-image-col { min-height: 260px; }
.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 260px;
  overflow: hidden;
}
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.project-card:hover .project-image { transform: scale(1.04); }
.project-image-overlay { position: absolute; bottom: 12px; right: 12px; }
.project-counter {
  background: rgba(0,0,0,0.55);
  color: white;
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 20px;
  backdrop-filter: blur(6px);
}
.project-body {
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.project-type-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 0.85rem;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.badge-pro {
  background: linear-gradient(135deg, rgba(17,153,142,0.12), rgba(56,239,125,0.12));
  color: #0a8a7a;
  border: 1px solid rgba(17,153,142,0.25);
}
.badge-perso {
  background: linear-gradient(135deg, rgba(102,126,234,0.12), rgba(118,75,162,0.12));
  color: #5a67d8;
  border: 1px solid rgba(102,126,234,0.25);
}
.project-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-color, #212529);
  margin-bottom: 0.6rem;
}
.project-description {
  font-size: 0.9rem;
  color: var(--text-muted-color, #6c757d);
  line-height: 1.65;
  margin-bottom: 1rem;
  flex-grow: 1;
}
.project-techs { display: flex; flex-wrap: wrap; gap: 6px; }
.tech-badge {
  font-size: 0.76rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 12px;
  background: var(--background-alt-color, #f1f3f5);
  color: var(--text-color, #495057);
  border: 1px solid var(--border-color, #dee2e6);
}
.project-actions { display: flex; flex-wrap: wrap; gap: 10px; }
.btn-project {
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
}
.btn-github {
  background: transparent;
  color: var(--text-color, #343a40);
  border: 2px solid var(--border-color, #dee2e6);
}
.btn-github:hover {
  background: #24292e;
  color: #ffffff;
  border-color: #24292e;
  transform: translateY(-2px);
}
.btn-demo {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #ffffff;
  border: 2px solid transparent;
}
.btn-demo:hover {
  opacity: 0.88;
  transform: translateY(-2px);
  color: #ffffff;
  box-shadow: 0 6px 16px rgba(102,126,234,0.35);
}
.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}
.custom-control {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(102,126,234,0.3);
  cursor: pointer;
}
.custom-control:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(102,126,234,0.45);
}
.carousel-dots { display: flex; align-items: center; gap: 8px; }
.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #dee2e6;
  border: none;
  padding: 0;
  transition: all 0.25s ease;
  cursor: pointer;
}
.carousel-dot.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  width: 24px;
  border-radius: 6px;
}
@media (max-width: 767px) {
  .project-image-col, .project-image-wrapper { min-height: 200px; }
  .project-body { padding: 1.25rem; }
  .project-title { font-size: 1.05rem; }
}
</style>