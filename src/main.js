import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import Inicio from './views/Inicio.vue';
import Photo from './views/Photo.vue';
import Work from './views/Work.vue';

Vue.use(VueRouter)

import './scss/main.scss';

Vue.config.productionTip = false

const router = new VueRouter( {
  routes:[
    { path : '/', component: Inicio},
    { path : '/photo', component: Photo},
    { path : '/work', component: Work}
  ]

})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
