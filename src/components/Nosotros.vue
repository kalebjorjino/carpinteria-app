<template>
<v-container>
   <v-row>
      <v-col lg="6">
         <v-subheader class="text-h4 justify-center">Nosostros</v-subheader>
         <p class="description">Nuestro personal, está capacitado además para realizar y resolver problemas en las siguientes áreas:
         </p>
         
            <v-list>
                <v-list-item>
                  <v-icon color="success" class="mr-3" >mdi-check-all</v-icon>
                  <v-list-item-subtitle >Diseñamos y fabricamos muebles. 
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                  <v-list-item-subtitle >Servicio de pintura de brocha gorda. 
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                  <v-list-item-subtitle >Acabados en en base a tu estilo.
                  </v-list-item-subtitle>
                </v-list-item>
                <p class="description">Mantenimiento y reparaciones a nivel carpintería y acabado.
                </p>
            </v-list>   
      </v-col>
      <v-col cols="12" sm="4">
             <img src="./../assets/images/nosotros.png" alt="">
             <v-divider></v-divider>         
      </v-col>
   </v-row>
</v-container>
</template>

<script>

export default {
    name:"Nosotros"
    
}

</script>

<style scoped>
p.description{
   font-size: 19px;
   font-family: Arial, Helvetica, Verdana;
   margin: 32px 0px;
   color:#444444ba;
}

</style>