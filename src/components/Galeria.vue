<template>
  <div class="block galleryBlock">
    <v-container>
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Galeria</v-subheader>
     </v-col>
      <v-row>
        <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="4">
          <v-card flat tile class="d-flex">
            <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Galeria",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/photo01.jpeg")
        },
        {
          id: 2,
          src: require("../assets/images/photo03.jpeg")
        },
        {
          id: 3,
          src: require("../assets/images/photo04.jpeg")
        },
        {
          id: 4,
          src: require("../assets/images/photo06.jpeg")
        },
        {
          id: 5,
          src: require("../assets/images/photo19.jpg")
        },
        {
          id: 6,
          src: require("../assets/images/photo20.jpg")
        },
        {
          id: 7,
          src: require("../assets/images/photo21.jpg")
        },
        {
          id: 8,
          src: require("../assets/images/photo07.jpeg")
        },
        {
          id: 9,
          src: require("../assets/images/photo01.jpeg")
        }
      ]
    };
  }
};
</script>

<style>
h2.text-center{
  font-size: 40px;
  font-weight: bold;
  font-family: Arial, Helvetica, Verdana;
  color: #444;

}
</style>