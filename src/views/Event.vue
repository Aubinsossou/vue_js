<script setup>
  import Typography from '@/components/Typography.vue'
</script>
<template>
   <Typography tag="h1"  text="WE LOVE EYA"/>

  <div class="container">
    <div id="weloveya"></div>
    <p>
      Le WeLovEya Festival est un événement consacré aux musiques urbaines et à l'afrobeat, organisé
      à Cotonou, au Bénin, depuis 2022. Il s'agit du plus grand festival de musique urbaine et
      afrobeat du pays, se tenant chaque année à la fin du mois de décembre.
    </p>
  </div>
</template>

<style scoped>

h1 {
  text-align: center;
  font-size: 2rem;
}
#weloveya{
  background-image: url('../assets/images/weloveya.png');
  height:300px;
  margin-bottom:30px;
}
</style>
