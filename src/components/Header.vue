<script setup>


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
        </div>
      </div>
    </header>
</template>

