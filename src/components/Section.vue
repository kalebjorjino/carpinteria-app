 <template>
    <v-container class="pt-15">
       <v-row>
          <v-col lg="6">
          <h2 class="intro-text">Bienvenido a Carpinteria Mozombite</h2>
          <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem error 
          repellat minima officia fuga vel recusandae autem repellendus rerum facere, 
          doloremque minus repudiandae aliquid quo ad nihil doloribus maxime eaque.</p>
          <v-btn color="success" class="white--text mr-10" rounded>Entrar</v-btn>
          <v-btn color="indigo" class="white--text" rounded>
             <v-icon>mdi-play-circle</v-icon>Ver Video
          </v-btn>
          </v-col>
          <v-col lg="6">
             <img width="100%" src="../assets/images/hero-img.png" alt="">
          
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
   font-size: 60px;
   font-weight: bold;
   font-family: cursive;
   color: #444;
}
p.description{
   font-size: 19px;
   font-family: cursive;
   margin: 32px 0px;
   color:#444444ba;
}

</style>
