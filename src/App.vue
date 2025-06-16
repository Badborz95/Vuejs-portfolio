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
    <ThemeSelector /> </div>
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
import ThemeSelector from './components/ThemeSelector.vue'; // Assure-toi que c'est bien là

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
    Footer,
    ThemeSelector // Et ici
  }
};
</script>

<style>
/* ... Tes styles globaux pour body et section ... */
/* Laisser les styles pour body, html, section ici comme précédemment */
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}
section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>