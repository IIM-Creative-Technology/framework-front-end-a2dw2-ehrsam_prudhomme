<script setup>
import icone_card from './icone_card.vue';
// defineProps(['text'])
</script>

<template>
  <div class=" rounded-lg w-1/5 shadow-lg">
    <slot name="img"></slot>
    <div class="p-5">
      <p class="uppercase text-xs">Management & Leadership</p>
      <h4 class="font-semibold">Accueillir un.e collègue en situation de handicap</h4>
      <div class="flex flex-row w-9/12 justify-left pt-5">
        <slot name="icone"></slot>
      </div>
    </div>
  </div>
</template>
