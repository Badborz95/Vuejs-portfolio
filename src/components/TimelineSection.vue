<template>
  <section id="timeline" class="py-5 bg-white">
    <div class="container">
      <h2 class="text-center mb-2 section-title">Mon Parcours</h2>
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
                    :class="['timeline-item', { left: index % 2 === 0, right: index % 2 !== 0 }]"
                  >
                    <div class="timeline-dot bg-primary"></div>
                    <div class="flip-card-wrapper" @click="toggleFlip('edu', index)" :class="{ 'is-flipped': flipped.edu[index] }">
                      <div class="flip-card-container">
                        <div class="flip-card-inner">
                          <div class="flip-card-front card shadow-sm p-3">
                            <div class="flip-hint d-md-none">
                              <i class="fas fa-sync-alt me-1"></i>Appuyer pour retourner
                            </div>
                            <h3 class="fs-6 fw-bold text-primary mb-1">{{ item.title }}</h3>
                            <p class="text-muted fw-bold mb-1 small">{{ item.date }}</p>
                            <p class="text-muted fw-semibold mb-2 small">{{ item.ecole }}</p>
                            <p class="text-dark small mb-0">{{ item.description }}</p>
                          </div>
                          <div class="flip-card-back card shadow-sm p-3">
                            <h3 class="fs-6 fw-bold text-white mb-2">{{ item.title }}</h3>
                            <p class="text-highlight fw-semibold mb-2 small">Points clés :</p>
                            <ul class="text-highlight list-unstyled mb-0">
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
                    :class="['timeline-item', { left: index % 2 === 0, right: index % 2 !== 0 }]"
                  >
                    <div class="timeline-dot bg-success"></div>
                    <div class="flip-card-wrapper" @click="toggleFlip('exp', index)" :class="{ 'is-flipped': flipped.exp[index] }">
                      <div class="flip-card-container">
                        <div class="flip-card-inner">
                          <div class="flip-card-front card shadow-sm p-3">
                            <div class="flip-hint d-md-none">
                              <i class="fas fa-sync-alt me-1"></i>Appuyer pour retourner
                            </div>
                            <h3 class="fs-6 fw-bold text-success mb-1">{{ item.title }}</h3>
                            <p class="text-muted fw-bold mb-1 small">{{ item.date }}</p>
                            <p class="text-muted fw-semibold mb-2 small">{{ item.company }}</p>
                            <p class="text-dark small mb-0">{{ item.description }}</p>
                          </div>
                          <div class="flip-card-back card shadow-sm p-3 experience-back">
                            <h3 class="fs-6 fw-bold text-white mb-2">{{ item.title }}</h3>
                            <p class="text-highlight fw-semibold mb-2 small">Missions / apports :</p>
                            <ul class="text-highlight list-unstyled mb-0">
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

        <div class="carousel-nav-bottom">
          <button
            v-if="activeSlide > 0"
            class="carousel-nav-btn"
            type="button"
            data-bs-target="#timelineCarousel"
            data-bs-slide="prev"
          >
            <i class="fas fa-chevron-left me-2"></i>
            {{ activeSlide === 1 ? 'Formation' : 'Expérience' }}
          </button>

          <button
            v-if="activeSlide < 1"
            class="carousel-nav-btn carousel-nav-btn--next"
            type="button"
            data-bs-target="#timelineCarousel"
            data-bs-slide="next"
          >
            {{ activeSlide === 0 ? 'Expérience' : 'Formation' }}
            <i class="fas fa-chevron-right ms-2"></i>
          </button>
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
      activeSlide: 0,
      flipped: { edu: {}, exp: {} },
      educationItems: [
        {
          title: "Mastère Big Data & IA",
          date: "2026 - 2028",
          ecole: "Sup de Vinci Nantes",
          description: "Formation orientée data engineering, intelligence artificielle et exploitation des données à grande échelle.",
          points: [
            'Python et SQL',
            'ETL, data pipeline et cloud',
            'IA et machine learning',
            'Industrialisation des traitements'
          ]
        },
        {
          title: "Licence Concepteur Développeur d'Applications",
          date: "Octobre 2025 - Septembre 2026 (Alternance)",
          ecole: "Dawan Nantes",
          description: "Formation diplômante axée sur la conception et le développement d'applications web, l'architecture logicielle, les bonnes pratiques et la gestion de projet.",
          points: [
            'Architecture web et mobile',
            'Frameworks modernes (Vue, React)',
            'Méthodes de gestion de projet',
            'Bases de données et API'
          ]
        },
        {
          title: "Formation développeur web Front-End POE",
          date: "Avril 2025 - Juillet 2025",
          ecole: "Dawan Nantes",
          description: "Apprentissage intensif des langages et frameworks à travers la pratique et la réalisation de projets concrets.",
          points: ['HTML, CSS, JavaScript, PHP', 'Vue.js, React.js, Symfony', 'Projets personnels et pratiques']
        },
        {
          title: "BTS SIO option SLAM",
          date: "2021 - 2024",
          ecole: "ESUPEC Cholet",
          description: "Études en initial avec spécialisation en développement d'applications et gestion de bases de données.",
          points: ['Développement full-stack', 'Bases de données', "Travail d'équipe"]
        }
      ],
      experienceItems: [
        {
          title: "Technicien Helpdesk - Intérim",
          date: "2026",
          company: "Helpline - Nantes",
          description: "Mission d'intérim en support utilisateur et assistance informatique, avec prise en charge des incidents et suivi des demandes.",
          points: [
            "Prise en charge des tickets utilisateurs",
            "Diagnostic et résolution de niveau 1",
            "Support à distance et suivi des incidents",
            "Escalade vers les équipes concernées si nécessaire"
          ]
        },
        {
          title: "Développeur Fullstack en alternance",
          date: "2025 - 2026",
          company: "DAWAN - Nantes",
          description: "Participation au développement et à l'amélioration d'un projet interne autour d'Angular, d'API et de Spring Boot.",
          points: ["Débogage et correction d'erreurs", 'Développement de nouvelles fonctionnalités', 'Amélioration du site et mise en place du RGPD', "Réunions d'équipe quotidiennes"]
        },
        {
          title: "Développeur d'applications - Stage",
          date: "Mai - Juin 2023 / Janvier - Février 2024",
          company: "A3Multimedia - Cholet",
          description: "Développement d'une application de gestion des stocks Desktop / Mobile avec WinDev et WinDev Mobile.",
          points: ['Développement WinDev et WinDev Mobile', 'Scan produit sur mobile', "Refonte UX/UI", "Intégration de modules IA internes"]
        },
        {
          title: "Jobs étudiants",
          date: "2022 - 2024",
          company: "Lidl puis Leclerc",
          description: "Expériences professionnelles complémentaires en grande distribution.",
          points: ['Autonomie et adaptabilité', 'Travail en équipe', 'Gestion du relationnel client']
        }
      ]
    };
  },
  mounted() {
    const carousel = document.getElementById('timelineCarousel');
    if (carousel) {
      carousel.addEventListener('slid.bs.carousel', (e) => {
        this.activeSlide = e.to;
      });
    }
  },
  methods: {
    toggleFlip(type, index) {
      this.flipped[type] = { ...this.flipped[type], [index]: !this.flipped[type][index] };
    }
  }
};
</script>

<style scoped>
.section-title {
  color: var(--accent-color, #667eea);
  font-weight: 700;
  font-size: 1.8rem;
}

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
  border-radius: 2px;
}

.timeline-item {
  padding: 10px 0;
  position: relative;
  width: 50%;
  margin-bottom: 40px;
  display: flex;
  align-items: flex-start;
}

.timeline-item.left { left: 0; padding-right: 44px; text-align: right; flex-direction: row-reverse; }
.timeline-item.right { left: 50%; padding-left: 44px; text-align: left; }

.timeline-dot {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  top: 22px;
  z-index: 10;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #667eea;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.timeline-item.left .timeline-dot { right: -9px; }
.timeline-item.right .timeline-dot { left: -9px; }
.timeline-item:hover .timeline-dot { width: 24px; height: 24px; top: 19px; box-shadow: 0 0 0 5px #667eea; }

.flip-card-wrapper { perspective: 1000px; width: 100%; flex: 1; cursor: pointer; }

.flip-card-inner {
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.68, -0.4, 0.265, 1.35);
}

@media (hover: hover) and (pointer: fine) {
  .flip-card-wrapper:hover .flip-card-inner { transform: rotateY(180deg); }
}

.flip-card-wrapper.is-flipped .flip-card-inner { transform: rotateY(180deg); }

.flip-card-front,
.flip-card-back {
  width: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 10px;
  box-sizing: border-box;
}

.flip-card-front {
  background-color: var(--background-alt-color, #f8f9fa);
  border: 1px solid var(--border-color, #dee2e6);
  display: block;
  position: relative;
}

.flip-card-back {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: rotateY(180deg);
  border: none;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.experience-back { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); }

.flip-card-front::after,
.flip-card-back::after {
  position: absolute;
  top: 26px;
  width: 0;
  height: 0;
  border-style: solid;
  content: '';
}

.timeline-item.left .flip-card-front::after { border-width: 8px 0 8px 8px; border-color: transparent transparent transparent var(--background-alt-color, #f8f9fa); right: -8px; }
.timeline-item.left .flip-card-back::after { border-width: 8px 0 8px 8px; border-color: transparent transparent transparent #667eea; right: -8px; }
.timeline-item.right .flip-card-front::after { border-width: 8px 8px 8px 0; border-color: transparent var(--background-alt-color, #f8f9fa) transparent transparent; left: -8px; }
.timeline-item.right .flip-card-back::after { border-width: 8px 8px 8px 0; border-color: transparent #667eea transparent transparent; left: -8px; }

.text-highlight { color: #f0f4ff !important; }

.flip-hint {
  font-size: 0.7rem;
  color: #667eea;
  margin-bottom: 6px;
  opacity: 0.75;
}

.carousel-indicators button { width: 12px; height: 12px; border-radius: 50%; }
.custom-carousel-control:hover .custom-carousel-icon { transform: scale(1.08); }

.carousel-nav-bottom {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 1.5rem;
  padding: 0 8px;
}

.carousel-nav-btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 22px;
  border-radius: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  font-size: 0.88rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(102,126,234,0.35);
  transition: all 0.25s ease;
}

.carousel-nav-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102,126,234,0.45);
}

@media (max-width: 767px) {
  .carousel-nav-bottom {
    flex-direction: row;
    gap: 10px;
  }

  .carousel-nav-btn {
    padding: 9px 16px;
    font-size: 0.82rem;
  }
}

@media (max-width: 767px) {
  .timeline::after { left: 18px; margin-left: 0; }

  .timeline-item,
  .timeline-item.left,
  .timeline-item.right {
    width: 100% !important;
    left: 0 !important;
    padding-left: 50px !important;
    padding-right: 6px !important;
    text-align: left !important;
    flex-direction: row !important;
    margin-bottom: 24px;
    padding-top: 0 !important;
  }

  .timeline-item .timeline-dot,
  .timeline-item.left .timeline-dot,
  .timeline-item.right .timeline-dot {
    position: absolute !important;
    left: 9px !important;
    right: auto !important;
    top: 14px !important;
    width: 16px !important;
    height: 16px !important;
    margin: 0 !important;
    transform: none !important;
  }

  .flip-card-front::after,
  .flip-card-back::after { display: none !important; }

  @media (hover: hover) and (pointer: fine) {
    .flip-card-wrapper:hover .flip-card-inner { transform: none; }
  }

  .custom-carousel-control { width: 36px; height: 36px; }
  .custom-carousel-icon { width: 36px; height: 36px; font-size: 0.8rem; }
  .carousel-control-prev { left: -2px; }
  .carousel-control-next { right: -2px; }
}

@media (max-width: 400px) {
  .timeline-item,
  .timeline-item.left,
  .timeline-item.right {
    padding-left: 42px !important;
    padding-right: 2px !important;
  }
}
</style>