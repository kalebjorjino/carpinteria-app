<template>
  <v-main>
     <Galeria/>
  </v-main>
</template>

<script>

import Galeria from '../components/Galeria';

export default {
  name: "Photo",

 components: {
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