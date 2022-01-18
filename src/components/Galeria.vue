<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Galeria</h2>
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
          src: require("../assets/images/desmotivacion1-z.jpg")
        },
        {
          id: 2,
          src: require("../assets/images/desmotivacion1-z1.jpg")
        },
        {
          id: 3,
          src: require("../assets/images/desmotivacion1-z2.jpg")
        },
        {
          id: 4,
          src: require("../assets/images/desmotivacion1-z.jpg")
        },
        {
          id: 5,
          src: require("../assets/images/desmotivacion1-z2.jpg")
        },
        {
          id: 6,
          src: require("../assets/images/desmotivacion1-z2.jpg")
        },
        {
          id: 7,
          src: require("../assets/images/desmotivacion1-z.jpg")
        },
        {
          id: 8,
          src: require("../assets/images/desmotivacion1-z.jpg")
        },
        {
          id: 9,
          src: require("../assets/images/desmotivacion1-z.jpg")
        }
      ]
    };
  }
};
</script>