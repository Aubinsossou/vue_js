<script setup>
  defineProps({
    text:{
      type:String,
      default:"Text",
    },
    tag:{
      type: String,
      default: "h2",
    },
      classe:{
      type: String,
      default: "",
    },
  })
</script>
<template>
   <component :is="tag" :class="classe" >
    {{text}}
   </component>
</template>
<style scoped>
h1 {
  margin: 30px 0px;
  font-size: 32px;
  text-align: center;
}
</style>
