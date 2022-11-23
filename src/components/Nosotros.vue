<template>
   <v-container>
      <v-row>
         
            <v-col lg="12" class="text-center">
               <v-subheader class="text-h4 justify-center">Nosostros</v-subheader>
               <p class="description">Nuestro personal, está capacitado además para realizar y resolver problemas en las
                  siguientes áreas:
               </p>
            </v-col>

            <v-list>
               <v-list-item>
                  <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                  <p class="description">Diseñamos y fabricamos muebles.
                  </p>
               </v-list-item>
               <v-list-item>
                  <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                  <p class="description">Servicio de pintura de brocha gorda.
                  </p>
               </v-list-item>
               <v-list-item>
                  <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                  <p class="description">Acabados en base a tu estilo.
                  </p>
               </v-list-item>
               <v-list-item>
                  <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                  <p class="description">Mantenimiento y reparaciones a nivel carpintería y acabado.</p>
               </v-list-item>
            </v-list>
         
      </v-row>
   </v-container>
</template>

<script>

export default {
   name: "Nosotros"

}

</script>

<style scoped>
p.description {
   font-size: 19px;
   font-family: Arial, Helvetica, Verdana;
   margin: 15px 0px;
   color: #444444ba;
}

@media (max-width: 599px) {
   v-subheader {
      align-items: center;
   }
}
</style>