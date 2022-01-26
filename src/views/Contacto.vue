<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../assets/images/img-carousel1.jpg">
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col>
          <v-container>
            <div class="headline">Contacto </div>
          </v-container>
        </v-col>
      </v-row>
    </v-img>
    </div>
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="nombre" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-textarea v-model="mensaje" :rules="messageRules" label="Mensaje" required></v-textarea>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Enviar</v-btn>
          <v-btn color="error" class="mr-4" @click="reset">Refrescar</v-btn>
        </v-form>
      </v-container>
    </div>
   
  </v-content>
</template>

<script>
export default {
  nombre: "Contact",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Nombre es requerido",
      v => (v && v.length <= 10) || "El nombre no debe contener mas de  10 caracteres"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail es requerido",
      v => /.+@.+\..+/.test(v) || "E-mail no es valido"
    ],
    mensaje: "",
    messageRules: [
      v => !!v || "Mensaje es requerido",
      v => (v && v.length >= 10) || "Mensaje no debe contener mas de  10 caracteres"
    ],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>