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
          <a href="https://wa.me/51985827395?text=¿Hola%20cómo%20estás?%20Quisiera%20informacion%20para%20mi%20proyecto%20:)" class="whatsapp" target="_blank"> <i class="fab fa-whatsapp"></i></a>
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