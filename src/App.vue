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
    <PageLoader/>
     <Header/>
    </v-app-bar>
    
    <router-view></router-view>

    <v-footer>
       <Footer/>
    </v-footer>
      
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    PageLoader
},

  data: () => ({
    //
  }),
};
</script>

