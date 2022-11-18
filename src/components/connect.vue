<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['urlConnect'])
</script>

<template>
  <div class="flex w-10 h-10 bg-gris rounded-full items-center">
    <img class="mx-auto" :src="urlConnect" alt="logo">
  </div>
</template>
