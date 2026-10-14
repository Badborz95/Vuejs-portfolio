<template>
  <section id="about" class="py-5 about-section">
    <div class="container">
      <div class="section-header text-center mb-5">
        <h2 class="section-title">À propos de moi</h2>
        <div class="section-underline"></div>
      </div>

      <div class="row g-4 align-items-stretch">
        <div class="col-lg-7">
          <div class="about-card h-100 p-4 p-md-5">
            <div class="profile-header mb-4">
              <div class="profile-avatar">
                <i class="fas fa-user"></i>
              </div>
              <div>
                <h3 class="profile-name">Turpal DJABRAILOV</h3>
                <p class="profile-role">
                  <i class="fas fa-graduation-cap me-1"></i>
                  Mastère Big Data & IA - SUP DE VINCI Nantes
                </p>
              </div>
            </div>

            <p class="about-text mb-3">
              Développeur web passionné, actuellement en
              <strong>Mastère Big Data & IA chez Sup de Vinci Nantes</strong>.
              J’aime concevoir des interfaces claires, des expériences fluides et des applications robustes,
              tout en développant mes compétences autour de la donnée et de l’intelligence artificielle.
            </p>

            <p class="about-text mb-3">
              J’ai travaillé avec <strong>Vue.js, React.js, Angular, Symfony, JavaScript, TypeScript</strong>,
              ainsi qu’avec <strong>Java, Spring Boot</strong> et des <strong>API REST</strong>.
              J’utilise aussi <strong>Python</strong> et <strong>SQL</strong> pour relier le développement web
              aux besoins data et aux cas d’usage IA.
            </p>

            <p class="about-text">
              Rigoureux, curieux et polyvalent, je recherche une alternance en France entière,
              avec une préférence pour les régions <strong>Pays de la Loire</strong>, <strong>Rhône-Alpes</strong> et
              <strong>Nouvelle-Aquitaine</strong>.
            </p>

            <div class="about-highlights">
              <div class="highlight-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Pays de la Loire · Nouvelle-Aquitaine · Rhône-Alpes (priorité)</span>
              </div>
              <div class="highlight-item">
                <i class="fas fa-briefcase"></i>
                <span>En recherche d'alternance — France entière</span>
              </div>
              <div class="highlight-item">
                <i class="fas fa-graduation-cap"></i>
                <span>Mastère Big Data & IA — Sup de Vinci Nantes</span>
              </div>
              <div class="highlight-item">
                <i class="fas fa-language"></i>
                <span>Français, Anglais, Russe, Polonais</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5 d-flex flex-column gap-4">
          <div class="about-card p-4">
            <h3 class="card-section-title mb-3">
              <span class="card-title-icon icon-web">
                <i class="fas fa-code"></i>
              </span>
              Compétences web
            </h3>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="skill in webSkills" :key="skill" class="badge-tech">{{ skill }}</span>
            </div>
          </div>

          <div class="about-card p-4">
            <h3 class="card-section-title mb-3">
              <span class="card-title-icon icon-backend">
                <i class="fas fa-server"></i>
              </span>
              Compétences backend
            </h3>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="skill in backendSkills" :key="skill" class="badge-backend">{{ skill }}</span>
            </div>
          </div>

          <div class="about-card p-4">
            <h3 class="card-section-title mb-3">
              <span class="card-title-icon icon-data">
                <i class="fas fa-database"></i>
              </span>
              Compétences data
            </h3>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="skill in dataSkills" :key="skill" class="badge-data">{{ skill }}</span>
            </div>
          </div>

          <div class="about-card p-4">
            <h3 class="card-section-title mb-3">
              <span class="card-title-icon icon-soft">
                <i class="fas fa-heart"></i>
              </span>
              Méthodes de travail
            </h3>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="skill in workMethods" :key="skill" class="badge-soft">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      webSkills: [
        'Vue.js',
        'React.js',
        'Angular',
        'Symfony',
        'TypeScript',
        'JavaScript',
        'HTML / CSS',
        'Bootstrap',
        'Tailwind CSS',
        'Git'
      ],
      backendSkills: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'PHP',
        'Node.js'
      ],
      dataSkills: [
        'Python',
        'SQL',
        'Big Data',
        'IA',
        'Machine Learning',
        'ETL'
      ],
      workMethods: [
        'Agile',
        'Scrum',
        'Autonomie',
        "Esprit d'équipe",
        'Curiosité',
        'Rigueur',
        'Adaptabilité'
      ]
    };
  }
};
</script>

<style scoped>
.about-section {
  background: var(--background-color, #f8f9fa);
}

.section-header {
  position: relative;
}

.section-title {
  font-weight: 700;
  font-size: 1.9rem;
  color: var(--text-color, #212529);
  margin-bottom: 0.6rem;
}

.section-underline {
  width: 56px;
  height: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 2px;
  margin: 0 auto;
}

.about-card {
  background: var(--background-alt-color, #ffffff);
  border: 1px solid var(--border-color, #e9ecef);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(102, 126, 234, 0.07);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.about-card:hover {
  box-shadow: 0 8px 28px rgba(102, 126, 234, 0.13);
  transform: translateY(-2px);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(102, 126, 234, 0.35);
}

.profile-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-color, #212529);
  margin: 0 0 4px;
}

.profile-role {
  font-size: 0.82rem;
  color: #667eea;
  font-weight: 500;
  margin: 0;
}

.about-text {
  color: var(--text-color, #495057);
  line-height: 1.75;
  font-size: 0.95rem;
}

.about-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color, #e9ecef);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.83rem;
  color: var(--text-color, #6c757d);
  font-weight: 500;
}

.highlight-item i {
  color: #667eea;
  font-size: 0.8rem;
}

.card-section-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-color, #343a40);
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
}

.card-title-icon {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.icon-web {
  background: linear-gradient(135deg, rgba(102,126,234,0.15), rgba(118,75,162,0.15));
  color: #667eea;
}

.icon-backend {
  background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.15));
  color: #3b82f6;
}

.icon-data {
  background: linear-gradient(135deg, rgba(46,204,113,0.15), rgba(39,174,96,0.15));
  color: #2ecc71;
}

.icon-soft {
  background: linear-gradient(135deg, rgba(233,93,138,0.13), rgba(255,140,80,0.13));
  color: #e95d8a;
}

.badge-tech,
.badge-backend,
.badge-data,
.badge-soft {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.badge-tech {
  background: linear-gradient(135deg, rgba(102,126,234,0.10), rgba(118,75,162,0.10));
  color: #5a67d8;
  border: 1px solid rgba(102,126,234,0.22);
}

.badge-backend {
  background: linear-gradient(135deg, rgba(59,130,246,0.10), rgba(37,99,235,0.10));
  color: #2563eb;
  border: 1px solid rgba(59,130,246,0.22);
}

.badge-data {
  background: linear-gradient(135deg, rgba(46,204,113,0.10), rgba(39,174,96,0.10));
  color: #1f8a4c;
  border: 1px solid rgba(46,204,113,0.22);
}

.badge-soft {
  background: linear-gradient(135deg, rgba(233,93,138,0.09), rgba(255,140,80,0.09));
  color: #c2486b;
  border: 1px solid rgba(233,93,138,0.22);
}

.badge-tech:hover,
.badge-backend:hover,
.badge-data:hover,
.badge-soft:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(102, 126, 234, 0.12);
}

@media (max-width: 575.98px) {
  .profile-header {
    align-items: flex-start;
  }

  .about-highlights {
    flex-direction: column;
  }
}
</style>