import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import VueToastr from "vue-toastr"
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faTrash,
    faPenToSquare,
    faCircleInfo,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
    faTrash,
    faPenToSquare,
    faCircleInfo,
    faRightFromBracket
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,

  mounted() {
    this.$toastr.defaultPosition = "toast-top-left";
  }
}).$mount('#app')
