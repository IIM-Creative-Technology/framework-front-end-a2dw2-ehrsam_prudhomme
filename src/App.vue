<script setup>
import connect from './components/connect.vue'
import Card from './components/Card.vue'
import boutton from './components/boutton.vue';
import pages from './components/pages.vue';
import icone_card from './components/icone_card.vue';
import footer_cat from './components/footer_cat.vue';
</script>

<template>
  <div class="flex flex-col overflow-x-hidden items-center relative flex w-screen h-screen">
  <header class="block relative  w-screen items-center text-white">
    <img class="top-0 absolute w-full -z-10" src="../images/fond.png" alt="fond">
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
        <boutton class="bg-white/30" msg="06 74 49 03 21"/>
        <boutton class=" text-purple bg-white" msg="Je prends contact"/>
      </div>
    </nav>
    <div class=" mt-5 flex flex-col text-center">
      <h1 class="text-6xl font-bold mb-10">Découvrez nos formations sur étagère ! </h1>
      <p class=" w-1/2 mx-auto">Notre catalogue de formations soft skills est le meilleur allié de vos managers et collaborateurs. Management, vente, ressources humaines, efficacité professionnelle... Composez votre parcours de formation et mixez les modalités pédagogiques pour développer leurs compétences.</p>
    </div>
  </header>
  <div class="mt-6 p-5 absolute top-2/4 rounded-3xl w-9/12 mx-auto flex flex-row justify-around bg-white text-font shadow-lg">
      <div class="rounded-full py-2 px-5 w-9/12 flex flex-row bg-light_purple justify-between items-center ">
        <p>Quelle formation recherchez-vous ?</p>
        <img class=" w-8" src="../images/search.svg" alt="search">
      </div>
      <div class=" rounded-full py-2 px-10 w-2/12 flex flex-row bg-light_purple justify-around items-center">
        <p>Filtrer </p>
        <img src="../images/down.svg" alt="down">
      </div>
  </div>
  <main class="mt-72 w-11/12 mx-auto flex flex-col justify-between" >
    <div class="flex flex-row w-maw justify-between">
      <h3 class="text-lg font-semibold uppercase mb-10">Les PLUS POPULAIRES 🔥</h3>
      <div class="flex flex-row items-center">
        <img class="w-6 h-6" src="../images/arrow_l.svg" alt="arrow">
        <img class="w-6 h-6 ml-2" src="../images/arrow_r.svg" alt="arrow">
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <Card>
        <template v-slot:title>
          <p class="uppercase text-xs">Management & Leadership</p>
        </template>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect.jpg" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
          <icone_card/>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:title>
          <p class="uppercase text-xs">VENTE</p>
        </template>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
        </template>
      </Card>
      
      <Card>
        <template v-slot:title>
          <p class="uppercase text-xs">RH, QVT & DIVERSITÉ</p>
        </template>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect2.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect3.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
          <icone_card/>
          <icone_card/>
        </template>
      </Card>
    </div>
  </main>
  <main class="-mb-5 mt-40 w-11/12 mx-auto flex flex-col justify-between" >
    <h3 class="text-lg font-semibold uppercase mb-10">TOUTES LES FORMATIONS 🚀</h3>
    <div class="flex flex-row justify-between mb-16">
      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect1-1.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
          <icone_card/>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect1-2.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect1-3.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
          <icone_card/>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect1-4.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
        </template>
      </Card>
    </div>

    <div class="flex flex-row justify-between mb-16">
      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect2-1.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect2-2.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect2-3.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect2-4.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
        </template>
      </Card>
    </div>

    <div class="flex flex-row justify-between">
      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect3-1.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect3-2.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect3-3.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
        </template>
      </Card>

      <Card>
        <template v-slot:img>
          <img class="w-full" src="../../images/Intersect3-4.png" alt="img">
        </template>
        <template v-slot:icone>
          <icone_card/>
        </template>
      </Card>
    </div>
  </main>
    <div class="w-screen flex justify-end -ml-32">
      <div class="mt-20 relative flex flex-row justify-between w-48 items-center">
        <pages class="flex text-border_icone_card opacity-100 border-2 rounded-full w-10 h-10 items-center pl-3 border-border_icone_card text-2xl" number="1"/>
        <pages number="2"/>
        <pages number="3"/>
        <pages number="4"/>
        <pages number="..."/>
        <pages number="8"/>
      </div>
    </div>
    <div class="mt-20 w-7/12 items-center h-60 justify-around mx-auto flex flex-col bg-light_purple rounded-2xl py-5 text-center">
      <h3 class="my-5 text-3xl font-bold">C’est votre dernier mot ?</h3>
      <p class="w-5/12">Si vous n’avez pas trouvé ce que vous cherchez, dites-le nous.</p>
      <div class="my-5 flex flex-row w-6/12 justify-between">
        <boutton class="bg-purple text-white font-semibold" msg="Je prends contact"/>
        <boutton class="font-semibold border-2 border-border_icone_card" msg="Télécharger le catalogue"/>
      </div>
    </div>

  <footer class="mt-20 relative w-screen pb-20 flex flex-col bg-font text-white bottom-0 pl-20">  

    <div class="flex flex-row mt-28 mb-20">
      <div>
        <img class="mb-5" src="../images/Logotypes Skillsday.svg" alt="skillsday">
        <p class=" w-60" >Skillsday est un organisme nouvelle génération qui a pour mission de moderniser et digitaliser la formation en entreprise pour former, vraiment !</p>
      </div>

      <footer_cat>
        <template v-slot:title>
          <h4 class="opacity-40 uppercase mb-5">solutions</h4>
        </template>
        <template v-slot:text>
          <p class="mb-2">Développer les soft skills</p>
          <p class="mb-2">Digitaliser les formations</p>
          <p class="mb-2">Accompagner les déploiements</p>
        </template>
      </footer_cat>

      <footer_cat>
        <template v-slot:title>
          <h4 class="opacity-40 uppercase mb-5">formations</h4>
        </template>
        <template v-slot:text>
          <p class="mb-2">Toutes les formations</p>
          <p class="mb-2">Télécharger le catalogue</p>
        </template>
      </footer_cat>

      <footer_cat>
        <template v-slot:title>
          <h4 class="opacity-40 uppercase mb-5">informations</h4>
        </template>
        <template v-slot:text>
          <p class="mb-2">Nous rejoindre</p>
          <p class="mb-2">Nous contacter</p>
          <p class="mb-2">FAQ</p>
        </template>
      </footer_cat>

    </div>
    <div class="flex flex-row">
      <div>
        <p>©Skillsday 2022</p>
        <p>Mentions légales  •  Politique de confidentialité  •  CGV</p>
      </div>
      <div class="flex flex-row justify-between w-2/12  ml-20">
        <connect>
          <template v-slot:url>
            <img class="mx-auto" src="../../images/instagram.svg" alt="logo">
          </template>
        </connect>

        <connect>
          <template v-slot:url>
            <img class="mx-auto" src="../../images/linkedin.svg" alt="logo">
          </template>
        </connect>

        <connect>
          <template v-slot:url>
            <img class="mx-auto" src="../../images/Frame.svg" alt="logo">
          </template>
        </connect>

        <connect>
          <template v-slot:url>
            <img class="mx-auto" src="../../images/youtube.svg" alt="logo">
          </template>
        </connect>
      </div>
    </div>
  </footer>
  </div>
</template>

<style scoped>
</style>
