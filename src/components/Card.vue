<script setup>
import icone_card from './icone_card.vue';
// defineProps(['text'])
</script>

<template>
  <div  class="rounded-lg w-1/5 shadow-lg">
    <img class="" src="../../images/Intersect.jpg" alt="img">
    <div class="p-5">
      <p class="uppercase">Management & Leadership</p>
      <h4 class="font-semibold">Accueillir un.e collègue en situation de handicap</h4>
      <div class="flex flex-row w-9/12 justify-between pt-5">
        <icone_card/>
        <icone_card/>
        <icone_card/>
      </div>
    </div>
  </div>
</template>
