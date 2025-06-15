// src/main.js
import { createApp } from 'vue';
import App from './App.vue';

// 1. Importer Bootstrap CSS EN PREMIER
import 'bootstrap/dist/css/bootstrap.min.css';
// 2. Importer Bootstrap JS (si besoin pour les composants JS de Bootstrap comme le carrousel)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 3. Importer ton fichier CSS personnalisé EN DERNIER pour qu'il puisse surcharger Bootstrap
import './assets/main.css';

createApp(App).mount('#app');