<template>
  <v-container>
    <v-footer padless>
      <v-card flat class="text-center">
        <v-card-text
          class="pt-0"
        >Contacto : 20159238si@gmail.com.</v-card-text>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Garcia Vasquez Jorjino</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
   
  })
};
</script>