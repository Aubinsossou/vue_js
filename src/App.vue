<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
const route = useRoute()
</script>

<template>
  <Header v-if="route.name !== 'login'" />

  <main class="main">
    <RouterView />
  </main>

  <Footer v-if="route.name !== 'login'" />
</template>

<style scoped></style>
