<template>
  <v-main>
     <Section/>
     <Nosotros/>
     <Trabajo/>
     <HeroComponent/>
     <Galeria/>
         <a v-bind:href="items.url" class="whatsapp" target="_blank"> <i class="fab fa-whatsapp"></i></a>
  </v-main>
</template>

<script>

import Section from '../components/Section';
import Nosotros from '../components/Nosotros';
import Trabajo from '../components/Trabajo';
import HeroComponent from '../components/HeroComponent';
import Galeria from '../components/Galeria';

export default {
  name: "Inicio",

  components: {
    Section,
    Nosotros,
    Trabajo,
    HeroComponent,
    Galeria,
    
},

  data() {
    return {
      items: {
       url: "https://wa.me/51985827395?text=¿Hola%20cómo%20estás?%20Quisiera%20informacion%20para%20mi%20proyecto%20:)"
    },

    };
  }
};
</script>

<style scoped>
      .whatsapp {
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  z-index:100;
}

.whatsapp-icon {
  margin-top:13px;
}
    </style>