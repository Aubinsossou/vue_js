<script setup>
defineProps({
  text_button: {
    type: String,
    requered: true,
  },
  url: {
    type: Object,
    required: false,
    default:{}
  },
})

</script>

<template>
  <RouterLink :to="url">{{ text_button }}</RouterLink>
</template>
<style scoped>
a {
  background-color: #7a96ff;
  text-align: center;
  width: 90px;
  padding: 12px 50px;
  margin: 40px auto;
  border-radius: 35px;
  font-size: 20px;
  font-weight: 700;
  color: white;
}
</style>
