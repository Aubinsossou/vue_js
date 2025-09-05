<script setup>
defineProps({

  tag: {
    type: String,
    default: "input",
  },
  // v_model: {
  //   type: String,
  //   default: "",
  // },

})
</script>

<template>
  <component :is="tag" >

  </component>
</template>
<style scoped>
h1 {
  margin: 30px 0px;
  font-size: 32px;
  text-align: center;
}
</style>
