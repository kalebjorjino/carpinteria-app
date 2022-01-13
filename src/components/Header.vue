<template>
    <v-container>
        <v-toolbar flat>
    
            <v-toolbar-title>Mozombite</v-toolbar-title>
    
            <v-spacer></v-spacer>
            <v-list class="d-flex align-center">
            <v-toolbar-items class="hidden-xs-only">
                <v-btn text>
                    Inicio
                </v-btn>
    
                <v-btn text>
                    Nosotros
                </v-btn>
    
                <v-btn text>
                    Galeria
                </v-btn>
            </v-toolbar-items>
             </v-list>   
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
