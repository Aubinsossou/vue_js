<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

</script>

<template>
   <div id="app">
   <Header />
    <main class="main">
       <RouterView />

    </main>
    <footer>
   <Footer />

    </footer>

   </div>


</template>

<style scoped>



</style>
