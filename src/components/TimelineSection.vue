<template>
  <section id="timeline" class="py-5 bg-white">
    <div class="container">
      <h2 class="text-center mb-4 text-primary">Mon Parcours</h2>
      <p class="text-center text-muted mb-5">Formation et expérience professionnelle</p>

      <div id="timelineCarousel" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators position-static mb-4">
          <button type="button" data-bs-target="#timelineCarousel" data-bs-slide-to="0" class="active bg-primary" aria-current="true" aria-label="Parcours"></button>
          <button type="button" data-bs-target="#timelineCarousel" data-bs-slide-to="1" class="bg-primary" aria-label="Expérience professionnelle"></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="timeline">
                  <div 
                    v-for="(item, index) in educationItems" 
                    :key="index" 
                    :class="['timeline-item', { 'left': index % 2 === 0, 'right': index % 2 !== 0 }]"
                  >
                    <div class="timeline-dot bg-primary"></div>
                    <div class="flip-card-wrapper">
                      <div class="flip-card-container">
                        <div class="flip-card-inner">
                          <div class="flip-card-front card shadow-sm p-4">
                            <h3 class="fs-5 text-primary">{{ item.title }}</h3>
                            <p class="text-muted fw-bold mb-2 small">{{ item.date }}</p>
                            <p class="text-muted fw-semibold mb-2 small">{{ item.ecole }}</p>
                            <p class="text-dark small">{{ item.description }}</p>
                          </div>
                          <div class="flip-card-back card shadow-sm p-4">
                            <h3 class="fs-5 text-white mb-3">{{ item.title }}</h3>
                            <p class="text-highlight fw-semibold mb-2 small">Points clés :</p>
                            <ul class="text-highlight list-unstyled">
                              <li v-for="point in item.points" :key="point" class="small mb-1">✓ {{ point }}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="timeline">
                  <div 
                    v-for="(item, index) in experienceItems" 
                    :key="index" 
                    :class="['timeline-item', { 'left': index % 2 === 0, 'right': index % 2 !== 0 }]"
                  >
                    <div class="timeline-dot bg-success"></div>
                    <div class="flip-card-wrapper">
                      <div class="flip-card-container">
                        <div class="flip-card-inner">
                          <div class="flip-card-front card shadow-sm p-4">
                            <h3 class="fs-5 text-success">{{ item.title }}</h3>
                            <p class="text-muted fw-bold mb-2 small">{{ item.date }}</p>
                            <p class="text-muted fw-semibold mb-2 small">{{ item.company }}</p>
                            <p class="text-dark small">{{ item.description }}</p>
                          </div>
                          <div class="flip-card-back card shadow-sm p-4 experience-back">
                            <h3 class="fs-5 text-white mb-3">{{ item.title }}</h3>
                            <p class="text-highlight fw-semibold mb-2 small">Missions / apports :</p>
                            <ul class="text-highlight list-unstyled">
                              <li v-for="point in item.points" :key="point" class="small mb-1">✓ {{ point }}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev custom-carousel-control" type="button" data-bs-target="#timelineCarousel" data-bs-slide="prev">
          <span class="custom-carousel-icon" aria-hidden="true">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next custom-carousel-control" type="button" data-bs-target="#timelineCarousel" data-bs-slide="next">
          <span class="custom-carousel-icon" aria-hidden="true">
            <i class="fas fa-chevron-right"></i>
          </span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineSection',
  data() {
    return {
      educationItems: [
        {
          title: "Licence Concepteur Développeur d'Applications",
          date: "Octobre 2025 - Septembre 2026 (Alternance)",
          ecole: "Dawan Nantes",
          description: "Formation axée sur la conception et le développement d'applications web et mobiles, incluant l'architecture logicielle, les bonnes pratiques et la gestion de projet.",
          points: [
            'Architecture web et mobile',
            'Frameworks modernes (Vue, React)',
            'Gestion de projet agile'
          ]
        },
        {
          title: "Formation développeur web Front-End POE",
          date: "Avril 2025 - Juillet 2025",
          ecole: "Dawan Nantes",
          description: "Apprentissage intensif des langages et frameworks à travers la pratique et la réalisation de projets concrets.",
          points: [
            'HTML, CSS, JavaScript, PHP',
            'Vue.js, React.js, Symfony',
            'Projets personnels et pratiques'
          ]
        },
        {
          title: "BTS SIO option SLAM",
          date: "2021 - 2024",
          ecole: "ESUPEC Cholet",
          description: "Études en initial avec spécialisation en développement d'applications et gestion de bases de données.",
          points: [
            'Développement full-stack',
            'Bases de données',
            'Travail d’équipe'
          ]
        }
      ],
      experienceItems: [
        {
          title: "Développeur Fullstack en alternance",
          date: "2025 - 2026",
          company: "DAWAN - Nantes",
          description: "Participation au développement et à l'amélioration d'un projet interne autour d'Angular, d'API et de Spring Boot.",
          points: [
            'Débogage et correction d’erreurs',
            'Développement de nouvelles fonctionnalités',
            'Amélioration du site et mise en place du RGPD',
            'Réunions d’équipe quotidiennes'
          ]
        },
        {
          title: "Développeur d'applications - Stage",
          date: "Mai - Juin 2023 / Janvier - Février 2024",
          company: "A3Multimedia - Cholet",
          description: "Développement d'une application de gestion des stocks Desktop / Mobile avec WinDev et WinDev Mobile.",
          points: [
            'Développement WinDev et WinDev Mobile',
            'Scan produit sur mobile',
            'Refonte UX/UI et amélioration de l’ergonomie',
            'Intégration de modules IA internes'
          ]
        },
        {
          title: "Jobs étudiants",
          date: "2022 - 2024",
          company: "Lidl puis Leclerc",
          description: "Expériences professionnelles complémentaires en grande distribution.",
          points: [
            'Autonomie et adaptabilité',
            'Travail en équipe',
            'Gestion du rythme et du relationnel client'
          ]
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
  background: linear-gradient(to bottom, #667eea, #764ba2);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
}

.timeline-item {
  padding: 10px 0;
  position: relative;
  width: 50%;
  margin-bottom: 50px;
  display: flex;
  align-items: flex-start;
}

.timeline-item.left {
  left: 0;
  padding-right: 40px;
  text-align: right;
  flex-direction: row-reverse;
}

.timeline-item.right {
  left: 50%;
  padding-left: 40px;
  text-align: left;
}

.timeline-dot {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 25px;
  z-index: 10;
  border: 3px solid white;
  box-shadow: 0 0 0 4px #667eea;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.timeline-item.left .timeline-dot {
  right: -10px;
}

.timeline-item.right .timeline-dot {
  left: -10px;
}

.timeline-item:hover .timeline-dot {
  width: 28px;
  height: 28px;
  top: 21px;
  box-shadow: 0 0 0 6px #667eea;
}

.flip-card-wrapper {
  perspective: 1000px;
  width: 100%;
  flex: 1;
}

.flip-card-container {
  width: 100%;
  position: relative;
}

.flip-card-inner {
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.flip-card-wrapper:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: relative;
  width: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 0.375rem;
}

.flip-card-front {
  background-color: #f8f9fa;
  transform: rotateY(0deg);
  border: 1px solid #dee2e6;
  padding: 1.5rem;
  box-sizing: border-box;
  display: block;
}

.flip-card-back {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: rotateY(180deg);
  border: 1px solid #667eea;
  padding: 1.5rem;
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.experience-back {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-color: #11998e;
}

.flip-card-front h3,
.flip-card-back h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  line-height: 1.3;
}

.flip-card-back h3 {
  color: white;
}

.flip-card-front p,
.flip-card-back p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.4;
}

.flip-card-back ul {
  margin-bottom: 0;
  padding-left: 0;
}

.flip-card-back ul li {
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 0.3rem;
}

.text-highlight {
  color: #f0f4ff !important;
  font-weight: 500;
}

.flip-card-front::after,
.flip-card-back::after {
  position: absolute;
  top: 30px;
  width: 0;
  height: 0;
  border-style: solid;
  content: '';
}

.timeline-item.left .flip-card-front::after {
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #f8f9fa;
  right: -10px;
}

.timeline-item.left .flip-card-back::after {
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #667eea;
  right: -10px;
}

.timeline-item.right .flip-card-front::after {
  border-width: 10px 10px 10px 0;
  border-color: transparent #f8f9fa transparent transparent;
  left: -10px;
}

.timeline-item.right .flip-card-back::after {
  border-width: 10px 10px 10px 0;
  border-color: transparent #667eea transparent transparent;
  left: -10px;
}

.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .timeline::after {
    left: 20px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 50px;
    padding-right: 0;
    flex-direction: row;
  }

  .timeline-item.left,
  .timeline-item.right {
    left: 0;
    text-align: left;
    flex-direction: row;
  }

  .timeline-dot {
    position: absolute;
    left: 10px;
    top: 25px;
  }

  .timeline-item.left .timeline-dot,
  .timeline-item.right .timeline-dot {
    right: auto;
    left: 10px;
  }

  .timeline-item.left .flip-card-front::after,
  .timeline-item.right .flip-card-front::after,
  .timeline-item.left .flip-card-back::after,
  .timeline-item.right .flip-card-back::after {
    border-width: 10px 10px 10px 0;
    border-color: transparent #f8f9fa transparent transparent;
    left: -10px;
    right: auto;
  }

  .timeline-item.right .flip-card-back::after {
    border-color: transparent #667eea transparent transparent;
  }

  .flip-card-front h3,
  .flip-card-back h3 {
    font-size: 1rem;
  }

  .flip-card-back ul li {
    font-size: 0.8rem;
  }
}
.custom-carousel-control {
  width: 56px;
  height: 56px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 1;
}

.custom-carousel-control:hover {
  opacity: 1;
}

.custom-carousel-control:focus {
  box-shadow: none;
}

.custom-carousel-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  font-size: 1.2rem;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);
  border: 2px solid rgba(255, 255, 255, 0.7);
  transition: all 0.25s ease;
}

.custom-carousel-control:hover .custom-carousel-icon {
  transform: scale(1.08);
  box-shadow: 0 10px 24px rgba(102, 126, 234, 0.5);
}

.carousel-control-prev {
  left: -10px;
}

.carousel-control-next {
  right: -10px;
}
</style>