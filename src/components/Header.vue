<script setup>
import BouttonDecouvrir from './BouttonDecouvrir.vue';
import { useRouter } from 'vue-router'
const isAuthenticated = localStorage.getItem("auth")
const route=useRouter
function deconnexion () {
  localStorage.removeItem("auth")
  route.path.push="/"
}
</script>
<template>
    <header class="header">
      <div class="container">
        <div class="header_content">

          <RouterLink to="/" class="header_left">
            <span>LOGO</span>
          </RouterLink>
          <ul class="header_right">
            <li class="header_right_item"><RouterLink to="/accueil">Acceuil</RouterLink></li>
            <li class="header_right_item"><RouterLink to="blog">Blog</RouterLink></li>
            <li class="header_right_item"><RouterLink to="event">Evènement</RouterLink></li>
            <li class="header_right_item"><RouterLink to="about">A propos</RouterLink></li>
            <li class="header_right_item"><RouterLink to="contact">Contact</RouterLink></li>
          </ul>
        <div class="btn-connexion">
          <BouttonDecouvrir to="/" text_button="Connexion" class="btn-login" v-if="!isAuthenticated"/>
          <BouttonDecouvrir @click.prevent="deconnexion()" text_button="Déconnexion" class="btn-logout" v-if="isAuthenticated"/>
        </div>
        </div>
      </div>
    </header>
</template>

<style scoped>
  
  .btn-login {
    color: white;
    padding: 7px 15px;
    background-color: green;
    border-radius: 12px;
    margin-right: 18px;
  }
  .btn-logout{
    color: white;
    padding: 7px 15px;
    border-radius: 12px;
    margin-right: 18px;
    background-color: red;
  }
</style>