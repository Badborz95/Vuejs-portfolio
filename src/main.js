import { createApp } from 'vue';
import App from './App.vue'; // Your root component is named App.vue
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; // Import Bootstrap JS
import './assets/main.css'; // Your global CSS file

const app = createApp(App);

// Mount your Vue application
app.mount('#app');

// Hide loading screen once everything is loaded
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const progressBar = document.getElementById('loading-progress-bar');
  const progressPercentage = document.getElementById('loading-percentage');

  // Ensure progress bar reaches 100% visually
  if (progressBar && progressPercentage) {
    progressBar.style.width = '100%';
    progressPercentage.textContent = '100%';
  }

  // Add a small delay for the 100% to be visible before fading out
  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add('fade-out'); // Trigger the CSS transition
      // Remove the element from DOM after transition ends for cleanup
      loadingScreen.addEventListener('transitionend', () => {
        loadingScreen.remove();
      });
    }
  }, 500); // 0.5 seconds delay after reaching 100%
});