import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import VueToastr from "vue-toastr";


import router from './router'

Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    // You are able to access plugin from everywhere via this.$toastr
    this.$toastr.defaultPosition = "toast-top-left";
  }
}).$mount('#app')
