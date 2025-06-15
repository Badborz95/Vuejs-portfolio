<template>
  <section id="timeline" class="py-5 bg-white">
    <div class="container">
      <h2 class="text-center mb-5 text-primary">Mon Parcours</h2>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="timeline">
            <div v-for="(item, index) in timelineItems" :key="index" :class="['timeline-item', { 'left': index % 2 === 0, 'right': index % 2 !== 0 }]">
              <div class="timeline-dot bg-primary"></div>
              <div class="timeline-content card shadow-sm p-4">
                <h3 class="fs-4 text-primary">{{ item.title }}</h3>
                <p class="text-muted fw-bold mb-2">{{ item.date }}</p>
                <p class="text-dark">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineSection',
  data() {
    return {
      timelineItems: [
        {
          title: "Licence Concepteur Développeur d'Applications",
          date: "Octobre 2025 - Septembre 2026 (Alternance)",
          ecole : "Par Dawan Nantes",
          description: "Formation axée sur la conception et le développement d'applications web et mobiles, incluant les bonnes pratiques de développement, l'architecture logicielle et la gestion de projet."
        },
        {
          title: "Formation developpeur web Front-End POE ",
          date: "Avril 2025 - Juillet 2025",
          ecole : "Dawan Nantes",
          description: "Apprentissage intensif des langages (HTML, CSS, JS, PHP) et des frameworks (Vue.js, React.js, Symfony) par la pratique et la réalisation de projets personnels."
        },
        {
          title: "BTS SIO (Services Informatiques aux Organisations) option SLAM",
          date: "2021 - 2024",
          ecole : "ESUPEC Cholet",
          description: "Etudes en initial, avec une spécialisation en développement d'applications et gestion de bases de données. Projets réalisés en équipe et stage en entreprise."
        }
      ]
    };
  }
};
</script>

<style scoped>
.timeline {
  position: relative;
  padding: 40px 0;
}
.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background-color: #e0e0e0;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
}

.timeline-item {
  padding: 10px 0;
  position: relative;
  width: 50%; /* 50% de la largeur du parent .timeline */
  margin-bottom: 50px;
}

.timeline-item.left {
  left: 0;
  padding-right: 40px; /* Espace pour le dot */
  text-align: right;
}
.timeline-item.right {
  left: 50%;
  padding-left: 40px; /* Espace pour le dot */
  text-align: left;
}

.timeline-dot {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 25px;
  z-index: 1;
}
.timeline-item.left .timeline-dot {
  right: -10px; /* Positionne le point sur la ligne centrale */
}
.timeline-item.right .timeline-dot {
  left: -10px;
}

.timeline-content {
  position: relative;
}
.timeline-item.left .timeline-content::after {
  content: '';
  position: absolute;
  top: 25px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #f8f9fa; /* Couleur de fond de la card Bootstrap */
  right: -10px;
}
.timeline-item.right .timeline-content::after {
  content: '';
  position: absolute;
  top: 25px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 10px 0;
  border-color: transparent #f8f9fa transparent transparent;
  left: -10px;
}

/* Responsive pour la timeline */
@media (max-width: 768px) {
  .timeline::after {
    left: 20px; /* Ligne à gauche pour mobile */
  }
  .timeline-item {
    width: 100%;
    padding-left: 50px;
    padding-right: 15px; /* Réduit le padding droit pour mobile */
  }
  .timeline-item.left,
  .timeline-item.right {
    left: 0;
    text-align: left;
    padding-right: 15px;
  }
  .timeline-dot {
    left: 10px; /* Point sur la ligne de gauche */
  }
  .timeline-item.left .timeline-dot,
  .timeline-item.right .timeline-dot {
    right: auto;
  }
  .timeline-item.left .timeline-content::after,
  .timeline-item.right .timeline-content::after {
    border-width: 10px 10px 10px 0; /* Pointe toujours à gauche */
    border-color: transparent #f8f9fa transparent transparent;
    left: -10px;
    right: auto;
  }
}
</style>