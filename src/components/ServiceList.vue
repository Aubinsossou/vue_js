<script setup>
  defineProps({
    url_img:{
      type:String,
      required:true,
    },
    title:{
      type:String,
      required:true,
    },
    description:{
      type:String,
      required:true,
    }
  })
</script>
<template>
  <div class="services_list_item">
    <img :src="url_img" alt="icon" class="service_image" />
    <h3 class="service_sub_title">{{ title }}</h3>
    <p class="service_sub_description">
        {{ description }}
    </p>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
