 <template>
    <v-container class="pt-15">
       <v-row>
          <v-col lg="6">
          <h2 class="intro-text">Especialistas en Madera y Melamina</h2>
          <p class="description">Trabajamos tus proyectos con profesionalismo, esmero y dedicación.</p>
          <v-btn color="success" class="white--text mr-10" rounded>Entrar</v-btn>
          <v-btn color="indigo" class="white--text" rounded>
             <v-icon>mdi-play-circle</v-icon>Ver Video
          </v-btn>
          </v-col>
          <v-col cols="12" sm="4">
             <img  src="../assets/images/hero-img.png" alt="">
             <v-divider></v-divider>
          
          </v-col>
       </v-row>
    </v-container>
 

</template>

<script>

export default {
    name: "Section"
}

</script>

<style scoped>
h2.intro-text{
   font-size: 50px;
   font-weight: bold;
   font-family: Arial, Helvetica, Verdana;
   color: #444;
}
p.description{
   font-size: 19px;
   font-family: Arial, Helvetica, Verdana;
   margin: 32px 0px;
   color:#444444ba;
}

</style>
