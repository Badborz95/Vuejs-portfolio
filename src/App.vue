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
import ThemeSelector from './components/ThemeSelector.vue';

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
    ThemeSelector
  },
  methods: {
    updateHeaderMode(isDark) {
      // This method will be called by Header to update its internal state when a mode is applied
      // (This specific method might not be directly needed if Header manages its state internally well,
      // but it's good for demonstrating communication if needed for other cross-component actions)
      // For now, we mainly need to forward events from ThemeSelector to Header.
    },
    handlePaletteSelected(isPaletteDark) {
      // Find the Header component instance and call a method on it
      // This is a direct way to communicate from child (ThemeSelector) to sibling (Header)
      // via parent (PortfolioPage)
      this.$children.find(child => child.$options.name === 'Header')
                     .updateIsDarkModeState(isPaletteDark);
    },
    handleResetToLight() {
      // Inform the Header to switch to its default light mode
      this.$children.find(child => child.$options.name === 'Header')
                     .updateIsDarkModeState(false);
    }
  }
};
</script>

<style>
/* ... Your global styles ... */
</style>