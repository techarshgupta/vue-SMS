import Vue from 'vue'
import App from './App.vue'

/* router imports */
import router from './router'

/* validate imports */
import vuelidate from 'vuelidate'
Vue.use(vuelidate);

/* material imports */
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

/* RESOURCE */
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root = 'http://schoolspedia.com:7070/';

Vue.use(VueMaterial)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
