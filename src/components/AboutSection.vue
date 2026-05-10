<template>
  <section id="about" class="py-5 about-section">
    <div class="container">
      <div class="section-header text-center mb-5">
        <h2 class="section-title">À propos de moi</h2>
        <div class="section-underline"></div>
      </div>

      <div class="row g-4 align-items-stretch">

        <!-- Profil -->
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
                  Ingénieur Informatique Expérience Interactive — CNAM ENJMIN
                </p>
              </div>
            </div>
            <p class="about-text mb-3">
              Développeur web passionné,
              actuellement en <strong>Licence Concepteur Développeur d'Applications</strong> en apprentissage
              chez <strong>Dawan (Nantes)</strong>. Je suis également admis en
              <strong>Ingénieur Informatique Expérience Interactive</strong> au CNAM ENJMIN pour la prochaine rentrée.
            </p>
            <p class="about-text mb-3">
              Fort d'une maîtrise de <strong>HTML, CSS, JavaScript et TypeScript</strong>, je suis à l'aise avec
              des frameworks modernes comme <strong>Vue.js, React.js, Angular et Symfony</strong>.
              Mon objectif est de concevoir des applications web robustes, intuitives et performantes.
            </p>
            <p class="about-text">
              Rigoureux et curieux, je travaille aussi bien en autonomie qu'en équipe et je cherche activement
              une <strong>alternance partout en France</strong>, avec une préférence pour les régions
              <strong>Pays de la Loire</strong> et <strong>Nouvelle-Aquitaine</strong>.
            </p>
            <div class="about-highlights">
            <div class="highlight-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Pays de la Loire · Nouvelle-Aquitaine (priorité)</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-briefcase"></i>
              <span>En recherche d'alternance — France entière</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-graduation-cap"></i>
              <span>Actuellement en apprentissage — Dawan Nantes</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-language"></i>
              <span>Français, Anglais, Russe</span>
            </div>
          </div>
          </div>
        </div>

        <!-- Compétences + Soft Skills -->
        <div class="col-lg-5 d-flex flex-column gap-4">

          <div class="about-card p-4">
            <h3 class="card-section-title mb-3">
              <span class="card-title-icon icon-tech"><i class="fas fa-code"></i></span>
              Compétences clés
            </h3>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="skill in techSkills" :key="skill" class="badge-tech">{{ skill }}</span>
            </div>
          </div>

          <div class="about-card p-4">
            <h3 class="card-section-title mb-3">
              <span class="card-title-icon icon-soft"><i class="fas fa-heart"></i></span>
              Qualités personnelles
            </h3>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="skill in softSkills" :key="skill" class="badge-soft">
                <i class="fas fa-check-circle me-1"></i>{{ skill }}
              </span>
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
      techSkills: [
        'Vue.js', 'Angular', 'React.js', 'Spring Boot', 'Symfony',
        'Java', 'TypeScript', 'JavaScript', 'HTML / CSS', 'PHP',
        'SQL', 'Git', 'Bootstrap', 'Tailwind CSS', 'Node.js', 'C++', 'Python'
      ],
      softSkills: [
        'Autonomie', "Esprit d'équipe", 'Curiosité', 'Rigueur',
        'Adaptabilité', "Esprit d'analyse", 'Communication',
        'Sens du détail', 'Polyvalence'
      ]
    };
  }
};
</script>

<style scoped>
.about-section {
  background: var(--background-color, #f8f9fa);
}

.section-header { position: relative; }

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

/* ===== CARTE ===== */
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

/* ===== PROFIL HEADER ===== */
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

/* ===== TEXTE ===== */
.about-text {
  color: var(--text-color, #495057);
  line-height: 1.75;
  font-size: 0.95rem;
}

/* ===== HIGHLIGHTS ===== */
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

/* ===== TITRE CARD ===== */
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

.icon-tech {
  background: linear-gradient(135deg, rgba(102,126,234,0.15), rgba(118,75,162,0.15));
  color: #667eea;
}

.icon-soft {
  background: linear-gradient(135deg, rgba(233,93,138,0.13), rgba(255,140,80,0.13));
  color: #e95d8a;
}

/* ===== BADGES ===== */
.badge-tech {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background: linear-gradient(135deg, rgba(102,126,234,0.10), rgba(118,75,162,0.10));
  color: #5a67d8;
  border: 1px solid rgba(102,126,234,0.22);
  transition: all 0.2s ease;
}

.badge-tech:hover {
  background: linear-gradient(135deg, rgba(102,126,234,0.20), rgba(118,75,162,0.20));
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(102,126,234,0.18);
}

.badge-soft {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background: linear-gradient(135deg, rgba(233,93,138,0.09), rgba(255,140,80,0.09));
  color: #c2486b;
  border: 1px solid rgba(233,93,138,0.22);
  transition: all 0.2s ease;
}

.badge-soft:hover {
  background: linear-gradient(135deg, rgba(233,93,138,0.18), rgba(255,140,80,0.18));
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(233,93,138,0.15);
}

.badge-soft .fas { font-size: 0.7rem; opacity: 0.8; }
</style>