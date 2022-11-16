<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import Card from "./components/Card.vue";
</script>

<template >
  <header class=" relative w-screen items-center text-white">
    <img class=" absolute w-screen -z-10 bg-no-repeat bg-cover" src="../images/fond.png" alt="fond">
    <nav class="flex flex-row w-11/12 h-40 justify-between items-center mx-auto">
      <div class="w-1/2 flex flex-row justify-around items-center">
        <img class=" w-30 h-4" src="../images/logo.svg" alt="logo">
        <div class="w-2/3 flex flex-row justify-around">
          <p>Offres</p>
          <p class="font-semibold">Formation</p>
          <p>Ressources</p>
          <p>A propos</p>
        </div>
      </div>
      <div class="flex w-1/4 font-semibold justify-around">
        <button class= "px-4 py-3 rounded-full bg-white/30">06 74 49 03 21</button>
        <button class="text-purple px-4 py-3 rounded-full bg-white">Je prends contact</button>
      </div>
    </nav>
    <div class=" mt-8 flex flex-col text-center">
      <h1 class="text-6xl font-bold mb-10">Découvrez nos formations sur étagère ! </h1>
      <p class=" w-1/2 mx-auto">Notre catalogue de formations soft skills est le meilleur allié de vos managers et collaborateurs. Management, vente, ressources humaines, efficacité professionnelle... Composez votre parcours de formation et mixez les modalités pédagogiques pour développer leurs compétences.</p>
    </div>
    <div class="p-5 absolute mt-20 ml-40 rounded-3xl w-9/12 mx-auto flex flex-row justify-around bg-white text-font shadow-lg">
      <div class="rounded-full py-2 px-5 w-9/12 flex flex-row bg-light_purple justify-between items-center ">
        <p>Quelle formation recherchez-vous ?</p>
        <img class=" w-8" src="../images/search.svg" alt="search">
      </div>
      <div class=" rounded-full py-2 px-10 w-2/12 flex flex-row bg-light_purple justify-around items-center">
        <p>Filtrer </p>
        <img src="../images/down.svg" alt="down">
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
