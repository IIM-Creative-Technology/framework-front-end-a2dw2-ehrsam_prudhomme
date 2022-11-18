<script setup>
import connect from './components/connect.vue'
import Card from './components/Card.vue'
import boutton from './components/boutton.vue';
import pages from './components/pages.vue';
import drop_down_footer from './components/drop_down_footer.vue';

</script>

<template>
  <div class="flex flex-col overflow-x-hidden items-center relative w-screen h-screen">
  <header class="block relative  w-screen items-center text-white">
    <img class="h-full md:h-auto top-0 absolute w-full -z-10" src="../images/fond.png" alt="fond">
    <nav class="md:flex hidden flex-row w-11/12 md:h-40 h-32 justify-between items-center mx-auto">
      <div class="w-1/2 flex flex-row justify-around items-center">
        <img class="hidden md:flex w-30 h-4" src="../images/logo.svg" alt="logo">
        <div class="w-2/3 hidden md:flex flex-row justify-around">
          <p>Offres</p>
          <p class="font-semibold">Formation</p>
          <p>Ressources</p>
          <p>A propos</p>
        </div>
      </div>
      <div class=" w-1/4 hidden md:flex font-semibold justify-around">
        <boutton class="bg-white/30" msg="06 74 49 03 21"/>
        <boutton class=" text-purple bg-white" msg="Je prends contact"/>
      </div>
    </nav>
    <nav class="flex md:hidden h-20 items-center w-11/12 mx-auto">
      <div class="md:hidden flex flex-row justify-between w-screen">
        <img class="flex h-8" src="../images/Logotypes Skillsday.svg" alt="logo">
        <img class="flex" src="../images/menu.svg" alt="menu">
      </div>
    </nav>
    <div class=" md:mt-5 mt-10 mb-20 flex flex-col text-center items-center">
      <h1 class="md:text-6xl text-3xl md:w-auto w-11/12 font-bold mb-10">Découvrez nos formations sur étagère ! </h1>
      <p class=" md:w-1/2 mx-auto -mt-5 md:mt-0 w-11/12">Notre catalogue de formations soft skills est le meilleur allié de vos managers et collaborateurs. Management, vente, ressources humaines, efficacité professionnelle... Composez votre parcours de formation et mixez les modalités pédagogiques pour développer leurs compétences.</p>
    </div>
  </header>
  <div class="md:mt-6 -mt-10 p-5 absolute top-2/4 rounded-3xl w-11/12 md:w-9/12 mx-auto flex md:flex-row flex-col justify-around bg-white text-font shadow-lg">
      <div class="rounded-full py-2 px-5 w-full md:w-9/12 flex flex-row bg-light_purple justify-between items-center ">
        <p class="md:flex hidden">Quelle formation recherchez-vous ?</p>
        <p  class="md:hidden flex">Quelle formation recherch...</p>
        <img class=" w-8" src="../images/search.svg" alt="search">
      </div>
      <div class=" mt-5 md:mt-0 rounded-full py-2 px-10 w-full md:w-2/12 flex flex-row bg-light_purple md:justify-around justify-between items-center">
        <p>Filtrer </p>
        <img src="../images/down.svg" alt="down">
      </div>
  </div>
  <main class="md:mt-72 mt-40 w-11/12 mx-auto flex flex-col justify-between " >
    <div class="flex flex-row w-maw justify-between items-center">
      <h3 class="text-lg font-semibold uppercase mb-10">Les PLUS POPULAIRES 🔥</h3>
      <div class="flex flex-row items-center">
        <img class="w-6 h-6" src="../images/arrow_l.svg" alt="arrow">
        <img class="w-6 h-6 ml-2" src="../images/arrow_r.svg" alt="arrow">
      </div>
    </div>
    <div class="flex md:flex-row flex-col justify-between">
      <div class="flex md:hidden">
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
      </div>
      <div class=" flex-row hidden md:flex justify-between">
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
    </div>
  </main>
  <main class="-mb-5 mb:mt-40 mt-20 w-11/12 mx-auto flex flex-col justify-between" >
    <h3 class="text-lg font-semibold uppercase mb-10">TOUTES LES FORMATIONS 🚀</h3>
    <div class="flex md:flex-row flex-col justify-between md:mb-16">
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

    <div class="flex md:flex-row flex-col justify-between md:mb-16">
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

    <div class="flex md:flex-row flex-col justify-between">
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
    <div class="w-screen flex justify-end md:-ml-32">
      <div class="md:mt-20 mt-8 relative flex flex-row justify-between w-48 items-center md:mx-0 mx-auto">
        <pages class="flex text-border_icone_card opacity-100 border-2 rounded-full w-10 h-10 items-center pl-3 border-border_icone_card text-2xl" number="1"/>
        <pages number="2"/>
        <pages number="3"/>
        <pages number="4"/>
        <pages number="..."/>
        <pages number="8"/>
      </div>
    </div>
    <div class="mt-20 md:w-7/12 w-11/12 items-center md:h-60 justify-around mx-auto flex flex-col bg-light_purple rounded-2xl py-5 text-center">
      <h3 class="my-5 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue to-border_icone_card md:text-black">C’est votre dernier mot ?</h3>
      <p class="md:w-5/12 w-11/12 ">Si vous n’avez pas trouvé ce que vous cherchez, dites-le nous.</p>
      <div class="my-5 flex md:flex-row flex-col w-11/12 md:w-6/12 justify-between">
        <boutton class="bg-purple text-white font-semibold" msg="Je prends contact"/>
        <boutton class="mt-5 md:mt-0 font-semibold border-2 border-border_icone_card" msg="Télécharger le catalogue"/>
      </div>
    </div>

  <footer class="mt-20 relative w-screen md:pb-20 -pb-10 flex flex-col bg-font text-white bottom-0 md:pl-20">  

    <div class="flex md:flex-row flex-col mt-28 mb-20">
      <div>
        <img class="mb-5  pl-5" src="../images/Logotypes Skillsday.svg" alt="skillsday">
        <p class="md:flex  hidden pl-5 w-60" >Skillsday est un organisme nouvelle génération qui a pour mission de moderniser et digitaliser la formation en entreprise pour former, vraiment !</p>
        <p class="md:hidden  flex pl-5 w-11/12 ">Skillsday, l’agence du mobile learning qui accompagne la performance des collaborateurs sur des formats courts, ciblés et efficients.</p>
      </div>
      <drop_down_footer titre="solutions"/>
      <drop_down_footer titre="formations"/>
      <drop_down_footer titre="informations"/>
      <div class="md:flex hidden flex-col font-semibold ml-20">
        <h4 class="opacity-40 uppercase mb-5">solutions</h4>
        <p class="mb-2">Développer les soft skills </p>
        <p class="mb-2">Digitaliser les formations</p>
        <p class="mb-2">Accompagner les déploiements</p>
      </div>
      <div class="md:flex hidden flex-col font-semibold ml-20">
        <h4 class="opacity-40 uppercase mb-5">formations</h4>
        <p class="mb-2">Toutes les formations</p>
        <p class="mb-2">Télécharger le catalogue</p>
      </div>
      <div class="md:flex hidden flex-col font-semibold ml-20">
        <h4 class="opacity-40 uppercase mb-5">informations</h4>
        <p class="mb-2">Nous rejoindre</p>
        <p class="mb-2">Nous contacter</p>
        <p class="mb-2">FAQ</p>
      </div>
    </div>
    <div class="flex md:flex-row flex-col">
      <div class="flex flex-col">
        <p>©Skillsday 2022</p>
        <div class="mt-5 flex md:flex-row flex-col justify-between h-32 w-full">
          <p>Mentions légales</p>
          <P class="md:flex hidden mx-2">•</P>
          <p>Politique de confidentiali</p>
          <P class="md:flex hidden mx-2">•</P>
          <p>CGV</p>
        </div>
      </div>
      <div class="flex flex-row justify-between md:w-2/12 w-1/2  ml-20 mx-auto">
        <connect/>
        <connect/>
        <connect/>
        <connect/>
      </div>
    </div>
  </footer>
  </div>
</template>

<style scoped>
</style>
