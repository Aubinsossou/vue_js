<script setup>
import { ref } from 'vue'
import Typography from '@/components/Typography.vue'
const count = ref(0)
console.log('count: ', count)
count.value = 7
</script>

<template>
  <div class="container">
    <Typography tag="h1" text="Ma page Exo" />
    <Typography tag="input" classe="input" />


    <h1>Compteur : {{ count }}</h1> 
    <button v-on:click="count++">Incrémenter</button>
    <button @click="count--">Décrémenter</button>
  </div>
</template>

<style scoped></style>
