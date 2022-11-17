<script setup>
import { ref } from 'vue'
defineProps(['number'])
</script>

<template>
  <p class="text-xl font-semibold opacity-50"> {{number}}</p>
</template>