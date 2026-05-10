<template>
  <section id="hero" class="hero-section d-flex align-items-center justify-content-center">
    <!-- Fond décoratif -->
    <div class="hero-bg-orb orb-1"></div>
    <div class="hero-bg-orb orb-2"></div>

    <div class="container text-center hero-content">

      <!-- Photo -->
      <div class="hero-avatar-wrapper mb-4">
        <img src="/img/hero.jpg" alt="Turpal DJABRAILOV" class="hero-avatar">
        <div class="hero-avatar-ring"></div>
        <span class="hero-status-dot" title="Disponible en apprentissage"></span>
      </div>

      <!-- Titre -->
      <h1 class="hero-title mb-2">
        Salut, je suis <span class="hero-name">Turpal DJABRAILOV</span>
      </h1>

      <!-- Sous-titre -->
      <p class="hero-subtitle mb-2">
        Développeur Full-Stack · Futur Ingénieur Informatique Expérience Interactive
      </p>
      <p class="hero-school mb-4">
        <i class="fas fa-graduation-cap me-1"></i> CNAM ENJMIN — Apprentissage
      </p>

      <!-- Réseaux sociaux -->
      <div class="hero-socials mb-5">
        <a href="https://github.com/Badborz95" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/djabrailovturpal/" target="_blank" rel="noopener noreferrer" class="social-btn social-linkedin" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>

      <!-- CTA Buttons -->
      <div class="hero-ctas">
        <a href="#projects" class="cta-btn cta-primary">
          <i class="fas fa-folder-open me-2"></i>Voir mes projets
        </a>
        <a href="#contact" class="cta-btn cta-outline">
          <i class="fas fa-envelope me-2"></i>Me contacter
        </a>
        <a href="/doc/Turpal-CV.pdf" download="Turpal-CV.pdf" class="cta-btn cta-success">
          <i class="fas fa-download me-2"></i>Télécharger CV
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="hero-scroll-hint">
        <a href="#about" aria-label="Défiler vers le bas">
          <i class="fas fa-chevron-down"></i>
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
/* ===== SECTION ===== */
.hero-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: var(--hero-background, #f8f9fa);
  padding-top: 80px;
}

/* ===== ORBES DÉCO ===== */
.hero-bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
}

.orb-1 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, #667eea, #764ba2);
  top: -80px;
  right: -100px;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #a78bfa, #60a5fa);
  bottom: 60px;
  left: -60px;
}

/* ===== CONTENU ===== */
.hero-content {
  position: relative;
  z-index: 1;
}

/* ===== AVATAR ===== */
.hero-avatar-wrapper {
  position: relative;
  display: inline-block;
}

.hero-avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  position: relative;
  z-index: 2;
  transition: transform 0.4s ease;
}

.hero-avatar:hover {
  transform: scale(1.04);
}

.hero-avatar-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2, #e95d8a);
  z-index: 1;
  animation: ring-rotate 6s linear infinite;
  opacity: 0.7;
}

.hero-avatar-ring::after {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: var(--hero-background, #f8f9fa);
}

@keyframes ring-rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.hero-status-dot {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 16px;
  height: 16px;
  background: #22c55e;
  border-radius: 50%;
  border: 3px solid #fff;
  z-index: 3;
  box-shadow: 0 0 0 3px rgba(34,197,94,0.3);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.3); }
  50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0.12); }
}

/* ===== TEXTE ===== */
.hero-title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  color: var(--text-color, #212529);
  line-height: 1.2;
}

.hero-name {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--text-color, #495057);
  font-weight: 500;
  opacity: 0.85;
}

.hero-school {
  font-size: 0.88rem;
  color: #667eea;
  font-weight: 500;
}

/* ===== RÉSEAUX SOCIAUX ===== */
.hero-socials {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.social-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(102,126,234,0.1);
  border: 1.5px solid rgba(102,126,234,0.2);
  color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-btn:hover {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-color: transparent;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(102,126,234,0.4);
}

.social-linkedin:hover {
  background: linear-gradient(135deg, #0077b5, #005885);
  box-shadow: 0 6px 18px rgba(0,119,181,0.4);
}

/* ===== BOUTONS CTA ===== */
.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 3rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 26px;
  border-radius: 50px;
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  letter-spacing: 0.2px;
}

.cta-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  box-shadow: 0 4px 16px rgba(102,126,234,0.35);
}

.cta-primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102,126,234,0.45);
  color: #fff;
}

.cta-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.cta-outline:hover {
  background: rgba(102,126,234,0.08);
  transform: translateY(-2px);
  color: #667eea;
}

.cta-success {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  box-shadow: 0 4px 16px rgba(34,197,94,0.3);
}

.cta-success:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(34,197,94,0.4);
  color: #fff;
}

/* ===== SCROLL HINT ===== */
.hero-scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.hero-scroll-hint a {
  color: rgba(102,126,234,0.5);
  font-size: 1.1rem;
  text-decoration: none;
  animation: bounce-y 2s ease-in-out infinite;
  display: block;
}

.hero-scroll-hint a:hover {
  color: #667eea;
}

@keyframes bounce-y {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(8px); }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 576px) {
  .hero-avatar { width: 130px; height: 130px; }
  .hero-ctas { flex-direction: column; align-items: center; }
  .cta-btn { width: 100%; max-width: 260px; justify-content: center; }
}
</style>