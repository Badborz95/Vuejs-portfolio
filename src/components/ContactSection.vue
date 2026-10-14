<template>
  <section id="contact" class="py-5 contact-section">
    <div class="container">
      <div class="section-header text-center mb-5">
        <h2 class="section-title">Me Contacter</h2>
        <div class="section-underline"></div>
        <p class="section-subtitle mt-3">
          Une opportunité d'alternance, une question ou simplement envie d'échanger ?<br>
          Je suis disponible et réponds rapidement !
        </p>
      </div>

      <div class="row justify-content-center g-4">
        <div class="col-lg-5">
          <div class="contact-card h-100 p-4 p-md-5">
            <h3 class="contact-card-title mb-4">
              <i class="fas fa-paper-plane me-2"></i>Coordonnées
            </h3>

            <div class="contact-item">
              <div class="contact-icon-wrap icon-email">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <p class="contact-label">Email</p>
                <a href="mailto:turpaldjabrailov01@gmail.com" class="contact-link">
                  turpaldjabrailov01@gmail.com
                </a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon-wrap icon-linkedin">
                <i class="fab fa-linkedin-in"></i>
              </div>
              <div>
                <p class="contact-label">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/djabrailovturpal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-link"
                >
                  linkedin.com/in/djabrailovturpal
                </a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon-wrap icon-github">
                <i class="fab fa-github"></i>
              </div>
              <div>
                <p class="contact-label">GitHub</p>
                <a
                  href="https://github.com/Badborz95"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-link"
                >
                  github.com/Badborz95
                </a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon-wrap icon-location">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p class="contact-label">Mobilité</p>
                <p class="contact-value">
                  France entière<br>
                  <span class="location-pref">Préférence : Pays de la Loire · Nouvelle-Aquitaine · Rhône-Alpes</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 d-flex flex-column gap-4">
          <div class="contact-card p-4 text-center availability-card">
            <div class="availability-dot"></div>
            <h4 class="availability-title">Disponible en alternance</h4>
            <p class="availability-text">
              Je recherche activement une alternance en lien avec mon Mastère Big Data & IA
              à Sup de Vinci Nantes.
            </p>
            <div class="availability-tags">
              <span class="avail-tag"><i class="fas fa-map-pin me-1"></i>Pays de la Loire</span>
              <span class="avail-tag"><i class="fas fa-map-pin me-1"></i>Nouvelle-Aquitaine</span>
              <span class="avail-tag"><i class="fas fa-map-pin me-1"></i>Rhône-Alpes</span>
              <span class="avail-tag avail-tag-light"><i class="fas fa-globe me-1"></i>France entière</span>
            </div>
          </div>

          <div class="contact-card p-4 text-center cv-card">
            <i class="fas fa-file-pdf cv-icon mb-3"></i>
            <h4 class="cv-title">Mon CV</h4>
            <p class="cv-text">Télécharge mes CV pour découvrir mon parcours complet.</p>

            <div class="cv-buttons">
              <a href="/doc/Turpal-CV-Data-IA.pdf" download="Turpal-CV-Data-IA.pdf" class="cv-btn">
                <i class="fas fa-download me-2"></i>Télécharger le CV - Data & IA
              </a>
              <a href="/doc/Turpal-CV-Fullstack.pdf" download="Turpal-CV-Fullstack.pdf" class="cv-btn">
                <i class="fas fa-download me-2"></i>Télécharger le CV - Fullstack
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
};
</script>

<style scoped>
.contact-section {
  background: var(--background-color, #f8f9fa);
}

.section-title {
  font-weight: 700;
  font-size: 1.9rem;
  color: var(--text-color, #212529);
  margin-bottom: 0.5rem;
}

.section-underline {
  width: 56px;
  height: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 2px;
  margin: 0 auto;
}

.section-subtitle {
  font-size: 0.97rem;
  color: var(--text-muted-color, #6c757d);
  line-height: 1.7;
}

.contact-card {
  background: var(--background-alt-color, #ffffff);
  border: 1px solid var(--border-color, #e9ecef);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(102,126,234,0.07);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.contact-card:hover {
  box-shadow: 0 8px 28px rgba(102,126,234,0.13);
  transform: translateY(-2px);
}

.contact-card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color, #212529);
  display: flex;
  align-items: center;
}

.contact-card-title i {
  color: #667eea;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color, #f1f3f5);
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  flex-shrink: 0;
  color: #fff;
}

.icon-email {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.icon-linkedin {
  background: linear-gradient(135deg, #0077b5, #005885);
}

.icon-github {
  background: linear-gradient(135deg, #24292e, #444d56);
}

.icon-location {
  background: linear-gradient(135deg, #e95d8a, #ff8c50);
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--text-muted-color, #adb5bd);
  margin: 0 0 2px;
}

.contact-link {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-color, #343a40);
  text-decoration: none;
  transition: color 0.2s ease;
  word-break: break-all;
}

.contact-link:hover {
  color: #667eea;
  text-decoration: underline;
}

.contact-value {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-color, #343a40);
  margin: 0;
  line-height: 1.5;
}

.location-pref {
  font-size: 0.8rem;
  color: #667eea;
  font-weight: 500;
}

.availability-card {
  border-top: 3px solid #22c55e;
}

.availability-dot {
  width: 12px;
  height: 12px;
  background: #22c55e;
  border-radius: 50%;
  margin: 0 auto 0.75rem;
  box-shadow: 0 0 0 4px rgba(34,197,94,0.2);
  animation: pulse-green 2s ease-in-out infinite;
}

@keyframes pulse-green {
  0%, 100% { box-shadow: 0 0 0 4px rgba(34,197,94,0.2); }
  50% { box-shadow: 0 0 0 8px rgba(34,197,94,0.08); }
}

.availability-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color, #212529);
  margin-bottom: 0.5rem;
}

.availability-text {
  font-size: 0.85rem;
  color: var(--text-muted-color, #6c757d);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.availability-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}

.avail-tag {
  font-size: 0.76rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(102,126,234,0.12), rgba(118,75,162,0.12));
  color: #5a67d8;
  border: 1px solid rgba(102,126,234,0.2);
}

.avail-tag-light {
  background: rgba(100,116,139,0.08);
  color: var(--text-muted-color, #64748b);
  border-color: rgba(100,116,139,0.2);
}

.cv-card {
  border-top: 3px solid #667eea;
}

.cv-icon {
  font-size: 2.2rem;
  color: #e74c3c;
  display: block;
}

.cv-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color, #212529);
  margin-bottom: 0.4rem;
}

.cv-text {
  font-size: 0.85rem;
  color: var(--text-muted-color, #6c757d);
  margin-bottom: 1rem;
}

.cv-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
  margin-top: 1rem;
}

.cv-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 22px;
  border-radius: 25px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  font-size: 0.87rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(102,126,234,0.3);
  transition: all 0.25s ease;
}

.cv-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(102,126,234,0.42);
  color: #fff;
}

@media (min-width: 768px) {
  .cv-buttons {
    flex-direction: row;
  }

  .cv-btn {
    flex: 1;
  }
}
</style>