<template>
    <v-container>
        <v-toolbar flat>
    
            <v-toolbar-title><router-link to="/">Mozombite</router-link></v-toolbar-title>
    
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn text><router-link to="/">Inicio</router-link></v-btn>
    
                <v-btn text><router-link to="/work">Trabajos</router-link></v-btn>
    
                <v-btn text><router-link to="/photo">Galeria</router-link></v-btn>
            </v-toolbar-items>
             <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title><router-link to="/">Inicio</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/work">Trabajos</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/photo">Galeria</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
        </v-toolbar>
    </v-container>
</template>

<script>
export default {
    name: 'Header',

    data: () => ({


    }),
}
</script>

