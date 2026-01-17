<script setup>
import { ref, computed, onMounted } from 'vue'
import { countries } from '@/services/countriesService.js'

const numb_element_perpage = ref(6)
const page_actuel = ref(1)
const loading = ref(false)
const datas = ref([])

function getFirstLanguage(languages) {
  if (!languages) return 'N/A'
  const languageValues = Object.values(languages)
  return languageValues[0] || 'N/A'
}
const totalPages = computed(() => {
  return Math.ceil(datas.value.length / numb_element_perpage.value)
})
const paginatedData = computed(() => {
  const start = (page_actuel.value - 1) * numb_element_perpage.value
  const end = start + numb_element_perpage.value
  console.log('numb_element_perpage: ', end)
  return datas.value.slice(start, end)
})

function nextPage() {
  if (page_actuel.value < totalPages.value) {
    page_actuel.value++
  }
}

function previousPage() {
  if (page_actuel.value > 1) {
    page_actuel.value--
  }
}
function page_end() {
  page_actuel.value = totalPages.value
}
function page_start() {
  page_actuel.value = 1
}
async function countriesList() {
  loading.value = true
  datas.value = await countries()
  loading.value = false
}
onMounted(() => {
  countriesList()
})

console.log(datas)
</script>
<template>
  <!-- Container principal -->
  <div class="app-wrapper">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">🌍 Découvrez le Monde</h1>
        <p class="hero-subtitle">Explorez les pays, leurs cultures et leurs données</p>
      </div>
    </section>

    <!-- Conteneur principal -->
    <div class="container">
      <!-- Loading State -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p class="loading-text">Chargement des pays...</p>
      </div>

      <!-- Grille des pays -->
      <div v-else class="countries-grid">
        <article
          class="country-card"
          v-for="data in paginatedData"
          :key="data.cca3"
        >
          <!-- Header avec drapeau -->
          <div class="country-header">
            <div class="flag-wrapper">
              <img :src="data.flags.svg" :alt="`Drapeau de ${data.name.common}`" class="flag-image" />
            </div>
            <h2 class="country-name">{{ data.name.common }}</h2>
          </div>

          <!-- Armoiries -->
          <div class="coat-of-arms-wrapper">
            <img
              v-if="data.coatOfArms?.png"
              :src="data.coatOfArms.png"
              :alt="`Armoiries de ${data.name.common}`"
              class="coat-of-arms"
            />
            <div v-else class="coat-of-arms-placeholder">
              <span>🏛️</span>
            </div>
          </div>

          <!-- Informations -->
          <div class="country-info">
            <div class="info-item">
              <span class="info-icon">🗣️</span>
              <div class="info-content">
                <span class="info-label">Langue</span>
                <span class="info-value">{{ getFirstLanguage(data.languages) }}</span>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon">👥</span>
              <div class="info-content">
                <span class="info-label">Population</span>
                <span class="info-value">{{ data.population?.toLocaleString() }}</span>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon">🏙️</span>
              <div class="info-content">
                <span class="info-label">Capitale</span>
                <span class="info-value">{{ data.capital?.[0] || 'N/A' }}</span>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="country-actions">
            <button class="action-btn action-btn-primary">
              <img src="../assets/images/icon1.png" alt="Info" />
            </button>
            <button class="action-btn action-btn-secondary">
              <img src="../assets/images/icon_3.png" alt="Favori" />
            </button>
            <button class="action-btn action-btn-accent">
              <img src="../assets/images/icon_2.png" alt="Partager" />
            </button>
          </div>
        </article>
      </div>
    </div>

    <!-- Pagination -->
    <div
      class="pagination-wrapper"
      v-if="datas.length > numb_element_perpage && !loading"
    >
      <div class="pagination-container container">
        <button
          @click.prevent="page_start()"
          :disabled="page_actuel === 1"
          class="pagination-btn pagination-btn-edge"
        >
          <span class="btn-text">Première</span>
        </button>

        <button
          @click="previousPage()"
          :disabled="page_actuel === 1"
          class="pagination-btn"
        >
          <span class="btn-text">Précédent</span>
        </button>

        <div class="page-indicator">
          <span class="page-current">{{ page_actuel }}</span>
          <span class="page-separator">/</span>
          <span class="page-total">{{ totalPages }}</span>
        </div>

        <button
          @click="nextPage()"
          :disabled="page_actuel === totalPages"
          class="pagination-btn"
        >
          <span class="btn-text">Suivant</span>
        </button>

        <button
          @click.prevent="page_end()"
          :disabled="page_actuel === totalPages"
          class="pagination-btn pagination-btn-edge"
        >
          <span class="btn-text">Dernière</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
/* ===========================
   VARIABLES PREMIUM
   =========================== */
:root {
  /* Couleurs principales */
  --primary: #6366f1;
  --primary-dark: #4338ca;
  --primary-light: #818cf8;
  --primary-glow: rgba(99, 102, 241, 0.4);

  /* Couleurs secondaires */
  --secondary: #ec4899;
  --accent: #8b5cf6;

  /* Couleurs neutres */
  --white: #ffffff;
  --black: #0f172a;
  --gray-50: #f8fafc;
  --gray-100: #f1f5f9;
  --gray-200: #e2e8f0;
  --gray-700: #334155;
  --gray-900: #0f172a;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

  /* Espacements */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;

  /* Border radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-2xl: 2rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.2);
  --shadow-glow: 0 0 40px var(--primary-glow);

  /* Transitions */
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===========================
   RESET & BASE
   =========================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(to bottom, #f8fafc 0%, #e0e7ff 100%);
  color: var(--gray-900);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

/* Background animé */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
  animation: floatBackground 20s ease-in-out infinite;
}

@keyframes floatBackground {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

/* ===========================
   CONTAINER
   =========================== */
.app-wrapper {
  min-height: 100vh;
  padding-bottom: var(--spacing-2xl);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

/* ===========================
   HERO SECTION
   =========================== */
.hero-section {
  background: var(--gradient-primary);
  padding: var(--spacing-2xl) 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-bottom: var(--spacing-xl);
  animation: floatBackground 25s ease-in-out infinite alternate;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.1)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-size: cover;
  animation: waveFloat 15s ease-in-out infinite;
}

@keyframes waveFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  color: var(--white);
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.03em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: slideInDown 0.8s ease-out;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.95);
  animation: slideInUp 0.8s ease-out 0.2s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===========================
   LOADING STATE
   =========================== */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: var(--spacing-lg);
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 4px solid var(--gray-200);
  border-top-color: var(--primary);
  border-radius: var(--radius-full);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  font-size: 1.25rem;
  font-weight: 600;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===========================
   GRILLE DES PAYS
   =========================== */
.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

/* ===========================
   CARD PAYS PREMIUM
   =========================== */
.country-card {
  background: var(--white);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.country-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: var(--transition-base);
  z-index: 0;
}

.country-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: var(--shadow-xl), var(--shadow-glow);
}

.country-card:hover::before {
  opacity: 0.03;
}

/* Header avec drapeau */
.country-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
  position: relative;
  z-index: 1;
}

.flag-wrapper {
  width: 70px;
  height: 70px;
  border-radius: var(--radius-full);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  flex-shrink: 0;
  border: 3px solid var(--white);
}

.flag-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.country-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gray-900);
  letter-spacing: -0.01em;
  line-height: 1.2;
}

/* Armoiries */
.coat-of-arms-wrapper {
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  background: var(--gray-50);
  position: relative;
  z-index: 1;
}

.coat-of-arms {
  max-width: 100%;
  max-height: 160px;
  object-fit: contain;
  transition: var(--transition-base);
}

.country-card:hover .coat-of-arms {
  transform: scale(1.05);
}

.coat-of-arms-placeholder {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  opacity: 0.3;
}

/* Informations */
.country-info {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  position: relative;
  z-index: 1;
}

.info-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm);
  background: var(--gray-50);
  border-radius: var(--radius-lg);
  transition: var(--transition-fast);
}

.info-item:hover {
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transform: translateX(4px);
}

.info-icon {
  font-size: 1.75rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.info-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gray-700);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-value {
  font-size: 1rem;
  font-weight: 700;
  color: var(--gray-900);
}

/* Actions */
.country-actions {
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg) var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.action-btn {
  flex: 1;
  height: 48px;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: var(--transition-base);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
}

.action-btn img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.action-btn-primary {
  background: var(--gradient-primary);
}

.action-btn-secondary {
  background: var(--gradient-secondary);
}

.action-btn-accent {
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
}

.action-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: var(--shadow-lg);
}

.action-btn:active {
  transform: translateY(0) scale(1);
}

/* ===========================
   PAGINATION PREMIUM
   =========================== */
.pagination-wrapper {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: var(--spacing-lg) 0;
  margin-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.05);
}

.pagination-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.pagination-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--white);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 1rem;
  color: var(--gray-900);
  cursor: pointer;
  transition: var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.pagination-btn:hover:not(:disabled) {
  background: var(--gradient-primary);
  color: var(--white);
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow);
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.pagination-btn-edge {
  background: var(--gradient-primary);
  color: var(--white);
  border-color: transparent;
}

.pagination-btn-edge:hover:not(:disabled) {
  background: var(--gradient-secondary);
}

.btn-icon {
  font-size: 1rem;
}

.btn-text {
  font-weight: 700;
}

/* Indicateur de page */
.page-indicator {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-glow);
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--white);
}

.page-current {
  font-size: 1.5rem;
}

.page-separator {
  opacity: 0.7;
}

.page-total {
  opacity: 0.9;
}

/* ===========================
   SCROLLBAR CUSTOM
   =========================== */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: var(--gray-100);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb {
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gradient-secondary);
}

/* ===========================
   RESPONSIVE
   =========================== */
@media (max-width: 1024px) {
  .countries-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .countries-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .pagination-container {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .pagination-btn,
  .pagination-btn-edge {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-sm);
  }

  .hero-section {
    padding: var(--spacing-lg) 0;
  }

  .country-header {
    flex-direction: column;
    text-align: center;
  }

  .flag-wrapper {
    width: 80px;
    height: 80px;
  }

  .country-name {
    font-size: 1.25rem;
  }
}
/*
<div class="countrie_item" v-for="data in datas">
      <div class="countrie_item_part1">
        <span class="img_pays"><img :src="data[x].flags.svg" alt="" /></span>
        <h2 class="name_pays">Pays: {{ data[x].name.common }}</h2>
        <br />
      </div>
      <div class="countrie_item_part2">
        <img :src="data.value[x].coatOfArms.png" alt="" class="devise_pays" />
      </div>
      <div class="countrie_item_part3">
        <h3>Langue: {{ langage[0] }}</h3>
        <h3>Populations: {{ data[x].population }}</h3>
        <h3>Capital: {{ data[x].capital[0] }}</h3>
        <div class="countrie_content_part3_icon">
          <span
            ><img src="../src/assets/images/icon.png" alt="" class="countrie_item_part3_icon_1"
          /></span>
          <span
            ><img src="../src/assets/images/icon_3.png" alt="" class="countrie_item_part3_icon_1"
          /></span>
          <span
            ><img src="../src/assets/images/icon_2.png" alt="" class="countrie_item_part3_icon_1"
          /></span>
        </div>
      </div>
    </div>
 */
</style>
