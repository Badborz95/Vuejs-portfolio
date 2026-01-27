<template>
  <section id="timeline" class="py-5 bg-white">
    <div class="container">
      <h2 class="text-center mb-5 text-primary">Mon Parcours</h2>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="timeline">
            <div 
              v-for="(item, index) in timelineItems" 
              :key="index" 
              :class="['timeline-item', { 'left': index % 2 === 0, 'right': index % 2 !== 0 }]"
            >
              <div class="timeline-dot bg-primary"></div>
              
              <!-- FLIP CARD WRAPPER -->
              <div class="flip-card-wrapper">
                <div class="flip-card-container">
                  <div class="flip-card-inner">
                    
                    <!-- FACE AVANT (Grise) -->
                    <div class="flip-card-front card shadow-sm p-4">
                      <h3 class="fs-5 text-primary">{{ item.title }}</h3>
                      <p class="text-muted fw-bold mb-2 small">{{ item.date }}</p>
                      <p class="text-muted fw-semibold mb-2 small">{{ item.ecole }}</p>
                      <p class="text-dark small">{{ item.description }}</p>
                    </div>
                    
                    <!-- FACE ARRIÈRE (Colorée) -->
                    <div class="flip-card-back card shadow-sm p-4">
                      <h3 class="fs-5 text-white mb-3">{{ item.title }}</h3>
                      <p class="text-highlight fw-semibold mb-2 small">Points clés :</p>
                      <ul class="text-highlight list-unstyled">
                        <li v-if="index === 0" class="small mb-1">✓ Architectures web et mobiles</li>
                        <li v-if="index === 0" class="small mb-1">✓ Framework modernes (Vue, React)</li>
                        <li v-if="index === 0" class="small mb-1">✓ Gestion de projet agile</li>
                        
                        <li v-if="index === 1" class="small mb-1">✓ HTML, CSS, JavaScript</li>
                        <li v-if="index === 1" class="small mb-1">✓ Vue.js, React.js, Symfony</li>
                        <li v-if="index === 1" class="small mb-1">✓ Projets personnels</li>
                        
                        <li v-if="index === 2" class="small mb-1">✓ Développement full-stack</li>
                        <li v-if="index === 2" class="small mb-1">✓ Bases de données</li>
                        <li v-if="index === 2" class="small mb-1">✓ Travail d'équipe</li>
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
          ecole: "Par Dawan Nantes",
          description: "Formation axée sur la conception et le développement d'applications web et mobiles, incluant les bonnes pratiques de développement, l'architecture logicielle et la gestion de projet."
        },
        {
          title: "Formation developpeur web Front-End POE",
          date: "Avril 2025 - Juillet 2025",
          ecole: "Dawan Nantes",
          description: "Apprentissage intensif des langages (HTML, CSS, JS, PHP) et des frameworks (Vue.js, React.js, Symfony) par la pratique et la réalisation de projets personnels."
        },
        {
          title: "BTS SIO (Services Informatiques aux Organisations) option SLAM",
          date: "2021 - 2024",
          ecole: "ESUPEC Cholet",
          description: "Etudes en initial, avec une spécialisation en développement d'applications et gestion de bases de données. Projets réalisés en équipe et stage en entreprise."
        }
      ]
    };
  }
};
</script>


<style scoped>
/* ========== TIMELINE PRINCIPALE ========== */
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

/* ========== DOT CENTRAL ========== */
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

/* ========== FLIP CARD ANIMATION ========== */
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

/* Face avant (grise - style original) */
.flip-card-front {
  background-color: #f8f9fa;
  transform: rotateY(0deg);
  border: 1px solid #dee2e6;
  padding: 1.5rem;
  box-sizing: border-box;
  display: block;
}

/* Face arrière (colorée) */
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

/* Couleur highlight pour meilleure lisibilité */
.text-highlight {
  color: #f0f4ff !important;
  font-weight: 500;
}

/* ========== POINTE DE FLÈCHE (adaptée au flip) ========== */
.flip-card-front::after,
.flip-card-back::after {
  position: absolute;
  top: 30px;
  width: 0;
  height: 0;
  border-style: solid;
  content: '';
}

/* Pointe pour items à gauche */
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

/* Pointe pour items à droite */
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

/* ========== RESPONSIVE ========== */
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
</style>