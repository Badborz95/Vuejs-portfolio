<template>
  <div id="portfolio-page">
    <Header @set-header-mode="updateHeaderMode" />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <TimelineSection />
    <ContactSection />
    <ScrollToTopButton />
    <Footer />
    <ThemeSelector @palette-selected="handlePaletteSelected" @reset-to-light="handleResetToLight" />
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
import ThemeSelector from './components/ThemeSelector.vue'; // Make sure this is present if you want the PC version

export default {
  name: 'PortfolioPage', // Or 'App' if this is your root component
  components: {
    Header,
    HeroSection,
    AboutSection,
    ProjectsSection,
    TimelineSection,
    ContactSection,
    ScrollToTopButton,
    Footer,
    ThemeSelector // Keep ThemeSelector for PC version
  },
  methods: {
    updateHeaderMode(isDark) {
      // This method is probably unused if Header manages its own state
      // but keeping it here for completeness if you have other uses.
    },
    handlePaletteSelected(isPaletteDark) {
      // Find the Header component instance and call a method on it
      // This is for communication from ThemeSelector (PC) to Header
      const headerComponent = this.$children.find(child => child.$options.name === 'Header');
      if (headerComponent && typeof headerComponent.updateIsDarkModeState === 'function') {
        headerComponent.updateIsDarkModeState(isPaletteDark);
      }
    },
    handleResetToLight() {
      // Inform the Header to switch to its default light mode
      const headerComponent = this.$children.find(child => child.$options.name === 'Header');
      if (headerComponent && typeof headerComponent.updateIsDarkModeState === 'function') {
        headerComponent.updateIsDarkModeState(false);
      }
    }
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
  max-width: 100%;
  margin: 0 auto;
}
</style>