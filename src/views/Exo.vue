<script setup>
import { ref } from 'vue'
import Typography from '@/components/Typography.vue'
const count = ref(0)
console.log('count: ', count)
 const counted=()=>{
  count.value++
 }
// setInterval(counted,1000)
</script>

<template>
  <div class="container">
    <Typography tag="h1" text="Ma page Exo" />
    <Typography tag="input" classe="input" />


    <h1>Compteur : {{ count }}</h1> 
    <button v-on:click="counted">Incrémenter</button>
    <button @click="count--">Décrémenter</button>
    <progress :value="count" max="20" style="width: 100%; accent-color: #eff224;"></progress>
  </div>
</template>

<style scoped></style>
