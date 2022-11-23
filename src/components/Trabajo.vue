<template>
    <v-container class="my-15">
    
 
        <v-row justify="center">
    
        <v-col lg="12" class="text-center">
           <v-subheader class="text-h4 justify-center">Trabajos Realizados</v-subheader>
           <p class="description">Son muchos los productos que fabricamos, casi de todo en madera y melamina.</p>
        </v-col>
           <v-col cols="12">
                <div class="text-center">
         
                    <v-chip @click="activeTrabajos = 'webapp'" :color="activeTrabajos === 'webapp'? '#1976d2': ''" class="mx-5">Melamine</v-chip>
  
                    <v-chip @click="activeTrabajos = 'mobileapp'" :color="activeTrabajos === 'mobile'? '#1976d2': ''" class="mx-5">Madera</v-chip>
                    
     
                </div>
  
            </v-col>
     
             <slot v-if="activeTrabajos === 'webapp'">
        <v-col lg="4" v-for="(web,webindex) in webApps" :key="webindex">
           <v-card>
             <v-img 
                  
                       :src="web.src"
                       class="white--text align-end"                     
                       max-height="560"
                       max-width="460"
            >
                <v-card-title>{{web.title}}</v-card-title>
            </v-img> 
             <v-card-subtitle class="pb-0 text--primary">{{ web.subtitle }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div class="description">{{ web.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="#1976d2" text>Ver</v-btn>
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
                       max-height="560"
                       max-width="460"
                       
            >
                <v-card-title>{{mobile.title}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0" color="#444444ba">{{ mobile.subtitle }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div class="description">{{ mobile.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="#1976d2" text >Ver</v-btn>
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
                  src: require("../assets/images/photo17.png") 
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
    
               
            ]
           

        }
    }
}
</script>

<style scoped>
div.description {
  font-size: 15px;
  font-family: Arial, Helvetica, Verdana;
  margin: 15px 0px;
  color: #444444ba;
}
p.description {
  font-size: 19px;
  font-family: Arial, Helvetica, Verdana;
  margin: 15px 0px;
  color: #444444ba;
}
</style>