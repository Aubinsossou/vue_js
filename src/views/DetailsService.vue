<script setup>
import { useRoute } from 'vue-router';
import Typography from '@/components/Typography.vue'

const route = useRoute();
const id =route.params.id;
</script>

<template>
     <Typography tag="h1" text="Ma page Détail" />{{id}}


</template>
<style scoped></style>
