<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="container">
        <div class="row align-items-center gy-4">

          <!-- Identité -->
          <div class="col-md-4 text-center text-md-start">
            <p class="footer-name">Turpal <span class="footer-name-accent">DJABRAILOV</span></p>
            <p class="footer-role">
              <i class="fas fa-code me-1"></i>
              Développeur Full-Stack · Apprenti CNAM ENJMIN
            </p>
          </div>

          <!-- Navigation rapide -->
          <div class="col-md-4 text-center">
            <nav class="footer-nav">
              <a href="#hero">Accueil</a>
              <a href="#about">À Propos</a>
              <a href="#projects">Projets</a>
              <a href="#timeline">Parcours</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <!-- Réseaux sociaux -->
          <div class="col-md-4 text-center text-md-end">
            <div class="social-links">
              <a href="https://www.linkedin.com/in/djabrailovturpal/" target="_blank" aria-label="LinkedIn" class="social-btn social-linkedin">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Badborz95" target="_blank" aria-label="GitHub" class="social-btn social-github">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Barre du bas -->
    <div class="footer-bottom">
      <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <p class="mb-0">&copy; {{ currentYear }} Turpal DJABRAILOV — Tous droits réservés.</p>
        <p class="mb-0 footer-made">
          Fait avec <i class="fas fa-heart footer-heart"></i> et <i class="fab fa-vuejs footer-vue"></i> Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return { currentYear: new Date().getFullYear() };
  }
};
</script>

<style scoped>
/* ===== FOOTER BASE — adaptatif clair/sombre ===== */
.site-footer {
  background: var(--footer-bg, #1e1e2e);
  color: var(--footer-text, rgba(255,255,255,0.82));
  border-top: 3px solid transparent;
  border-image: linear-gradient(135deg, #667eea, #764ba2) 1;
}

/* Mode clair : fond légèrement sombre mais lisible */
:root:not(.dark-mode) .site-footer,
body:not(.dark-mode) .site-footer {
  background: #1e1b2e;
  color: rgba(255,255,255,0.82);
}

/* ===== TOP ===== */
.footer-top {
  padding: 2.5rem 0 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.footer-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: #fff;
  letter-spacing: 0.3px;
}

.footer-name-accent {
  background: linear-gradient(135deg, #a78bfa, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-role {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.5);
  margin: 0;
}

/* ===== NAV ===== */
.footer-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px 2px;
}

.footer-nav a {
  font-size: 0.84rem;
  font-weight: 500;
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;
}

.footer-nav a:hover {
  color: #fff;
  background: rgba(167,139,250,0.18);
}

/* ===== SOCIAL ===== */
.social-links {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.25s ease;
  background: rgba(255,255,255,0.07);
}

.social-btn:hover {
  transform: translateY(-3px);
  color: #fff;
  border-color: transparent;
}

.social-linkedin:hover {
  background: #0077b5;
  box-shadow: 0 6px 18px rgba(0,119,181,0.45);
}

.social-github:hover {
  background: #24292e;
  box-shadow: 0 6px 18px rgba(0,0,0,0.4);
}

/* ===== BOTTOM ===== */
.footer-bottom {
  padding: 1rem 0;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.38);
}

.footer-made { font-size: 0.8rem; }
.footer-heart { color: #e95d8a; margin: 0 3px; font-size: 0.75rem; }
.footer-vue   { color: #42b883; margin: 0 3px; }
</style>