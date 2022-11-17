<script setup>
import { ref } from 'vue'
defineProps(['msg'])
</script>

<template>
  <button class="px-4 py-3 rounded-full">{{msg}}</button>
</template>