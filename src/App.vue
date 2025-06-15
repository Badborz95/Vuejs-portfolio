<template>
  <div id="portfolio-page">
    <Header />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <TimelineSection />
    <ContactSection />
    <ScrollToTopButton />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import TimelineSection from './components/TimelineSection.vue';
import ContactSection from './components/ContactSection.vue';
import ScrollToTopButton from './components/ScrollToTopButton.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'PortfolioPage',
  components: {
    Header,
    HeroSection,
    AboutSection,
    ProjectsSection,
    TimelineSection,
    ContactSection,
    ScrollToTopButton,
    Footer
  }
};
</script>

<style>
/* Styles globaux (police, couleurs de base, resets CSS) */
html {
  scroll-behavior: smooth; /* Permet un défilement doux vers les ancres */
}
body {
  font-family: 'Roboto', sans-serif; /* Exemple de police */
  margin: 0;
  background-color: #f8f9fa; /* Couleur de fond légère */
  color: #333;
}
/* Styles pour les sections (padding, marges, etc.) */
section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>