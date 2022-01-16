<template>
    <v-container class="my-15">
    
 
        <v-row justify="center">
    
        <v-col lg="12" class="text-center">
           <v-subheader class="text-h4 justify-center">Productos</v-subheader>
           <p>Son muchos los productos que podemos fabricar, casi de todo en madera y melamina.</p>
        </v-col>
           <v-col cols="12">
                <div class="text-center">
         
                    <v-chip @click="activeTrabajos = 'webapp'" :color="activeTrabajos === 'webapp'? 'success': ''" class="mx-5">Mantenimiento</v-chip>
  
                    <v-chip @click="activeTrabajos = 'mobileapp'" :color="activeTrabajos === 'mobile'? 'success': ''" class="mx-5">Armado</v-chip>
                    <v-chip @click="activeTrabajos = 'desktopapp'" :color="activeTrabajos === 'desktopapp'? 'success': ''" class="mx-5">Reparacion</v-chip>
     
                </div>
  
            </v-col>
     
            <slot v-if="activeTrabajos === 'webapp'">
    
 
                <v-col cols="12" md="3" v-for="(web,webindex) in webApps" :key="webindex">
    
     
                    <v-img :src="web.image"  aspect-ratio="1" class="grey lighten-2"></v-img>
     
                </v-col>
    
            </slot>
    
            <slot v-if="activeTrabajos === 'mobileapp'">
                <v-col cols="12" md="3" v-for="(mobile,mobileindex) in mobileApps" :key="mobileindex">
    
   
                    <v-img :src="mobile.image"  aspect-ratio="1" class="grey lighten-2"></v-img>   
    
                </v-col>
     
            </slot>
             <slot v-if="activeTrabajos === 'desktopapp'">
    
    
                <v-col cols="12" md="3" v-for="(desktop,desktopindex) in desktopApps" :key="desktopindex">
     
    
                    <v-img :src="desktop.image"  aspect-ratio="1" class="grey lighten-2"></v-img>   
 
      
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
                { title: 'Web App 1', image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t31.18172-8/19467888_194965491033960_8336985962332592219_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHB4ikZ15KxK0-quaq6DDBmiHmQflz08KmIeZB-XPTwqZNb598XBxpTW65jseMlNXMOl_7XB5Uc71tQLi1AYB0l&_nc_ohc=gDwpxREn6scAX9BpSiz&_nc_ht=scontent.flim18-2.fna&oh=00_AT8kiZCIhfFh2Gt5twrofkqKj1NtY2oeTf9GabHuVFEQXg&oe=61FDA847' },
                { title: 'Web App 2', image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t31.18172-8/19467888_194965491033960_8336985962332592219_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHB4ikZ15KxK0-quaq6DDBmiHmQflz08KmIeZB-XPTwqZNb598XBxpTW65jseMlNXMOl_7XB5Uc71tQLi1AYB0l&_nc_ohc=gDwpxREn6scAX9BpSiz&_nc_ht=scontent.flim18-2.fna&oh=00_AT8kiZCIhfFh2Gt5twrofkqKj1NtY2oeTf9GabHuVFEQXg&oe=61FDA847' },
                { title: 'Web App 3', image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t31.18172-8/19467888_194965491033960_8336985962332592219_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHB4ikZ15KxK0-quaq6DDBmiHmQflz08KmIeZB-XPTwqZNb598XBxpTW65jseMlNXMOl_7XB5Uc71tQLi1AYB0l&_nc_ohc=gDwpxREn6scAX9BpSiz&_nc_ht=scontent.flim18-2.fna&oh=00_AT8kiZCIhfFh2Gt5twrofkqKj1NtY2oeTf9GabHuVFEQXg&oe=61FDA847' },
                { title: 'Web App 4', image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t31.18172-8/19467888_194965491033960_8336985962332592219_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHB4ikZ15KxK0-quaq6DDBmiHmQflz08KmIeZB-XPTwqZNb598XBxpTW65jseMlNXMOl_7XB5Uc71tQLi1AYB0l&_nc_ohc=gDwpxREn6scAX9BpSiz&_nc_ht=scontent.flim18-2.fna&oh=00_AT8kiZCIhfFh2Gt5twrofkqKj1NtY2oeTf9GabHuVFEQXg&oe=61FDA847' },
               
               
            ],
            mobileApps: [
                { title: 'Web App 1', image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t31.18172-8/19467888_194965491033960_8336985962332592219_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHB4ikZ15KxK0-quaq6DDBmiHmQflz08KmIeZB-XPTwqZNb598XBxpTW65jseMlNXMOl_7XB5Uc71tQLi1AYB0l&_nc_ohc=gDwpxREn6scAX9BpSiz&_nc_ht=scontent.flim18-2.fna&oh=00_AT8kiZCIhfFh2Gt5twrofkqKj1NtY2oeTf9GabHuVFEQXg&oe=61FDA847' },
                { title: 'Web App 2', image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t31.18172-8/19467888_194965491033960_8336985962332592219_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHB4ikZ15KxK0-quaq6DDBmiHmQflz08KmIeZB-XPTwqZNb598XBxpTW65jseMlNXMOl_7XB5Uc71tQLi1AYB0l&_nc_ohc=gDwpxREn6scAX9BpSiz&_nc_ht=scontent.flim18-2.fna&oh=00_AT8kiZCIhfFh2Gt5twrofkqKj1NtY2oeTf9GabHuVFEQXg&oe=61FDA847' },
                { title: 'Web App 3', image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t31.18172-8/19467888_194965491033960_8336985962332592219_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHB4ikZ15KxK0-quaq6DDBmiHmQflz08KmIeZB-XPTwqZNb598XBxpTW65jseMlNXMOl_7XB5Uc71tQLi1AYB0l&_nc_ohc=gDwpxREn6scAX9BpSiz&_nc_ht=scontent.flim18-2.fna&oh=00_AT8kiZCIhfFh2Gt5twrofkqKj1NtY2oeTf9GabHuVFEQXg&oe=61FDA847' },
                { title: 'Web App 4', image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t31.18172-8/19467888_194965491033960_8336985962332592219_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHB4ikZ15KxK0-quaq6DDBmiHmQflz08KmIeZB-XPTwqZNb598XBxpTW65jseMlNXMOl_7XB5Uc71tQLi1AYB0l&_nc_ohc=gDwpxREn6scAX9BpSiz&_nc_ht=scontent.flim18-2.fna&oh=00_AT8kiZCIhfFh2Gt5twrofkqKj1NtY2oeTf9GabHuVFEQXg&oe=61FDA847' },
               
            ],
             desktopApps: [
                { title: 'Web App 1', image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t31.18172-8/19467888_194965491033960_8336985962332592219_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHB4ikZ15KxK0-quaq6DDBmiHmQflz08KmIeZB-XPTwqZNb598XBxpTW65jseMlNXMOl_7XB5Uc71tQLi1AYB0l&_nc_ohc=gDwpxREn6scAX9BpSiz&_nc_ht=scontent.flim18-2.fna&oh=00_AT8kiZCIhfFh2Gt5twrofkqKj1NtY2oeTf9GabHuVFEQXg&oe=61FDA847' },
                { title: 'Web App 2', image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t31.18172-8/19467888_194965491033960_8336985962332592219_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHB4ikZ15KxK0-quaq6DDBmiHmQflz08KmIeZB-XPTwqZNb598XBxpTW65jseMlNXMOl_7XB5Uc71tQLi1AYB0l&_nc_ohc=gDwpxREn6scAX9BpSiz&_nc_ht=scontent.flim18-2.fna&oh=00_AT8kiZCIhfFh2Gt5twrofkqKj1NtY2oeTf9GabHuVFEQXg&oe=61FDA847' },
               
            ]

        }
    }
}
</script>

<style scoped>

</style>