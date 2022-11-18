<script setup>
import { ref } from 'vue'
defineProps(['titre'])
</script>

<template>
  <div class="h-10 mt-10 -mb-6 md:hidden bg-gris flex flex-row items-center w-screen justify-between px-5">
    <h4 class="uppercase font-semibold">{{titre}}</h4>
    <img src="../../down_w.svg" alt="down">
    </div>
</template>