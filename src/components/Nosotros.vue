<template>
<v-container>
   <v-row>
      <v-col lg="6">
         <img src="./../assets/images/nosotros.png" alt="">
      </v-col>
      <v-col lg="6">
         <v-subheader class="text-h4">Nosostros</v-subheader>
         <p>Nuestro personal, está capacitado además para realizar y resolver problemas en las siguientes áreas:
         </p>
         
            <v-list>
                <v-list-item>
                  <v-icon color="success" class="mr-3" >mdi-check-all</v-icon>
                  <v-list-item-subtitle>Diseñamos y fabricamos muebles y enseres en madera y melamina
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                  <v-list-item-subtitle>Servicio de pintura de brocha gorda de paredes y fachadas.
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                  <v-list-item-subtitle>Acabados en DD, polyester, duco, esmalte, laca etc 
                  </v-list-item-subtitle>
                </v-list-item>
                <p>Mantenimiento y reparaciones a nivel carpintería y acabado.
                </p>
            </v-list>   
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
.text-h4{
   font-size: 60px;
   font-weight: bold;
   font-family: Arial, Helvetica, Verdana;
   color: #444;
}
.mr-3{
   font-family: Arial, Helvetica, Verdana;
   color:#444444ba;
}
</style>