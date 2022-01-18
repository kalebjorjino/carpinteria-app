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
    <Footer/>
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
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Section,
    Nosotros,
    Trabajo,
    HeroComponent,
    Galeria,
    Footer
    
},

  data: () => ({
    //
  }),
};
</script>
