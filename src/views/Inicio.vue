<template>
  <v-main>
     <Section/>
     <Nosotros/>
     <Trabajo/>
     <HeroComponent/>
     <Galeria/>
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
      items: [
       
      ]
    };
  }
};
</script>