<script setup>
defineProps({

  tag: {
    type: String,
    default: "input",
  },


})
</script>

<template>
  <component :is="tag">

  </component>
</template>
<style scoped>
h1 {
  margin: 30px 0px;
  font-size: 32px;
  text-align: center;
}
</style>
