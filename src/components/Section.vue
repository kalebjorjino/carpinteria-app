 <template>
    <v-container class="pt-15">
       <v-row>
          <v-col lg="6">
          <h2 class="intro-text">Carpinteria Mozombite</h2>
          <p class="description">Trabajamos tus proyectos con profesionalismo, esmero y dedicación.</p>
          <v-btn color="#FFFFFF" class="white--text mr-10"  rounded><router-link to="/contacto">Consultar</router-link></v-btn>
          <v-btn color="#1976d2" class="white--text" rounded>
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
   font-size: 40px;
   font-weight: bold;
   font-family: Arial, Helvetica, Verdana;
   color: #444;

}

@media (max-width: 599px) {
   .intro-text {
     text-align: center;
   }
 }
p.description{
   font-size: 19px;
   font-family: Arial, Helvetica, Verdana;
   margin: 35px 0px;
   color:#444444ba;
}

@media (max-width: 599px) {
   .description {
     text-align: center;
   }
 }

 @media (max-width: 599px) {
   .white--text {
     left: 65px;
   }
 }

</style>
