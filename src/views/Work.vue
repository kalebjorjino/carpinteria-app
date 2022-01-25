<template>
  <v-main>
     <Trabajo/>
  </v-main>
</template>

<script>

import Trabajo from '../components/Trabajo';

export default {
  name: "Work",

 components: {
    Trabajo,
    
},

  data() {
    return {
      items: [
       
      ]
    };
  }
};
</script>