<template>
  <v-app>
    <v-app-bar
       style="padding: 0px 90px"
      app
      color="white"
      light
      elevation="6"
      elevate-on-scroll
      
    >
     <Header/>
    </v-app-bar>
    <v-main>
    <Section/>
    <Nosotros/>
    <Trabajo/>
    <HeroComponent/>
    <Galeria/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Section from './components/Section';
import Nosotros from './components/Nosotros';
import Trabajo from './components/Trabajo';
import HeroComponent from './components/HeroComponent';
import Galeria from './components/Galeria';

export default {
  name: 'App',

  components: {
    Header,
    Section,
    HeroComponent,
    Trabajo,
    Nosotros,
    Galeria,
    
},

  data: () => ({
    //
  }),
};
</script>
