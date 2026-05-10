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
    <VisitorCounter />
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
import ThemeSelector from './components/ThemeSelector.vue';
import VisitorCounter from './components/VisitorCounter.vue';

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
    ThemeSelector,
    VisitorCounter
  },
  methods: {
    updateHeaderMode(isDark) {},
    handlePaletteSelected(isPaletteDark) {
      const headerComponent = this.$children.find(child => child.$options.name === 'Header');
      if (headerComponent && typeof headerComponent.updateIsDarkModeState === 'function') {
        headerComponent.updateIsDarkModeState(isPaletteDark);
      }
    },
    handleResetToLight() {
      const headerComponent = this.$children.find(child => child.$options.name === 'Header');
      if (headerComponent && typeof headerComponent.updateIsDarkModeState === 'function') {
        headerComponent.updateIsDarkModeState(false);
      }
    }
  }
};
</script>

<style>
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

#portfolio-page {
  min-height: 100vh;
}
</style>