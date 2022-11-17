<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['href'])
</script>

<template>
  <div class="bg-gris rounded-full">
    {{ href }}
  </div>
</template>
