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
    <HeroComponent/>
    <Section/>
    <Nosotros/>
    <Trabajo/>
    <Galeria/>
    <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import HeroComponent from './components/HeroComponent';
import Section from './components/Section';
import Nosotros from './components/Nosotros';
import Trabajo from './components/Trabajo';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    HeroComponent,
    Section,
    Trabajo,
    Nosotros,
    Galeria,
    Footer
    
},

  data: () => ({
    //
  }),
};
</script>
