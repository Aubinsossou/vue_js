<script setup>
import { useRoute } from 'vue-router'
import Typography from '@/components/Typography.vue'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="container">
    <Typography tag="h1" text="Ma page Détail" />
    <h1>Details de l'article qui a pour id {{ id }}</h1>
  </div>
</template>
<style scoped></style>
