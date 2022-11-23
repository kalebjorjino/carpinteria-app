<template>
  <div class="heroBlock">
     <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.title }}</v-row>
      </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
 export default {
    data () {
      return {
        items: [
        {
          src: require("../assets/images/photo08.jpeg"),
       
        },
        {
          src: require("../assets/images/photo14.jpeg"),
          
        },
        {
          src: require("../assets/images/photo11.jpeg"),
        
        },
         {
          src: require("../assets/images/photo07.jpeg"),
        
        }
      ],
      }
    },
  }
</script>