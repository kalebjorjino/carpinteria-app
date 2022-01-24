<template>
    <v-container class="my-15">
    
 
        <v-row justify="center">
    
        <v-col lg="12" class="text-center">
           <v-subheader class="text-h4 justify-center">Trabajos Realizados</v-subheader>
           <p>Son muchos los productos que podemos fabricar, casi de todo en madera y melamina.</p>
        </v-col>
           <v-col cols="12">
                <div class="text-center">
         
                    <v-chip @click="activeTrabajos = 'webapp'" :color="activeTrabajos === 'webapp'? 'success': ''" class="mx-5">Melamine</v-chip>
  
                    <v-chip @click="activeTrabajos = 'mobileapp'" :color="activeTrabajos === 'mobile'? 'success': ''" class="mx-5">Madera</v-chip>
                    <v-chip @click="activeTrabajos = 'desktopapp'" :color="activeTrabajos === 'desktopapp'? 'success': ''" class="mx-5">Reparacion</v-chip>
     
                </div>
  
            </v-col>
     
             <slot v-if="activeTrabajos === 'webapp'">
        <v-col lg="4" v-for="(web,webindex) in webApps" :key="webindex">
           <v-card>
             <v-img 
                  
                       :src="web.src"
                       class="white--text align-end"                     
                       height="200px"
            >
                <v-card-title>{{web.title}}</v-card-title>
            </v-img> 
             <v-card-subtitle class="pb-0">{{ web.subtitle }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ web.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text>Ver</v-btn>
            </v-card-actions>     
           </v-card>       
        </v-col>
        </slot>
         <slot v-if="activeTrabajos === 'mobileapp'">
        <v-col lg="4" v-for="(mobile,mobileindex) in mobileApps" :key="mobileindex">
           <v-card>
             <v-img 
                  
                       :src="mobile.src"
                       class="white--text align-end"
                       height="200px"
            >
                <v-card-title>{{mobile.title}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ mobile.subtitle }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ mobile.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text >Ver</v-btn>
            </v-card-actions>  
           </v-card>       
        </v-col>
        </slot>
         <slot v-if="activeTrabajos === 'desktopapp'">
        <v-col lg="4" v-for="(desktop,desktopindex) in desktopApps" :key="desktopindex">
           <v-card>
             <v-img 
                  
                       :src="desktop.src"
                       class="white--text align-end"
                       height="200px"
            >
                <v-card-title>{{desktop.title}}</v-card-title>
            </v-img> 
            <v-card-subtitle class="pb-0">{{ desktop.subtitle }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ desktop.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text>Ver</v-btn>
            </v-card-actions>    
           </v-card>       
        </v-col>
        </slot>
    
        </v-row>
    
    
    </v-container>
</template>

<script>
export default {
    name: "Trabajos",
    data() {
        return {
            activeTrabajos: 'webapp',
            webApps: [
                { title: 'Botica', 
                  subtitle: "Mueble Areo en melamine",
                  description: "Trabajamos con los mejores materiales del medio, que unido a nuestra experiencia, asegura la calidad de nuestros productos",
                  src: require("../assets/images/photo15.jpeg")                               
                },

                { title: 'Cocina', 
                  subtitle: "Mueble de cocina",
                  description: "Nuestros trabajos están garantizados, trabajamos con materiales y productos de alta calidad, para su máxima duración.",
                  src: require("../assets/images/photo16.jpeg") 
                },

                { title: 'Cocina', 
                  subtitle: "Mueble de cocina",
                  description: "Contamos con técnicos y profesionales altamente capacitados, capaces de resolver situaciones, inclusive de otros oficios.",
                  src: require("../assets/images/photo17.jpeg") 
                }
    
                  ],

            mobileApps: [
                 { title: 'Mueble 1', 
                  subtitle: "Mueble en melamine",
                  description: "Realizamos diseños y fabricaciones de reposteros de melamina o madera, en colores solicitados por nuestros clientes.",
                  src: require("../assets/images/photo12.jpeg")                               
                },

                { title: 'Mueble 2', 
                  subtitle: "Mueble en melamine",
                  description: "Diseños e instalaciones según medidas solictadas.",
                  src: require("../assets/images/photo13.jpeg") 
                },

                { title: 'Mueble 3', 
                  subtitle: "Mueble en melamine",
                  description: "Fabricamos escritorios con amplia gama de modelos y colores.",
                  src: require("../assets/images/photo18.jpeg") 
                }
    
               
            ],
             desktopApps: [
                { title: 'Mueble 4', 
                  subtitle: "Mueble en melamine",
                  description: "Realizamos diseños y fabricaciones de reposteros de melamina o madera, en colores solicitados por nuestros clientes.",
                  src: require("../assets/images/photo01.jpeg")                               
                },

                { title: 'Mueble 5', 
                  subtitle: "Mueble en melamine",
                  description: "Realizamos diseños y fabricaciones de reposteros de melamina o madera, en colores solicitados por nuestros clientes.",
                  src: require("../assets/images/photo02.jpeg") 
                },

                { title: 'Mueble 6', 
                  subtitle: "Mueble en melamine",
                  description: "Realizamos diseños y fabricaciones de reposteros de melamina o madera, en colores solicitados por nuestros clientes.",
                  src: require("../assets/images/photo03.jpeg") 
                }
    
               
            ]

        }
    }
}
</script>

<style scoped>

</style>