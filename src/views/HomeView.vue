<template>
    <div class="d-flex justify-content-md-center">
      <div class="col-6">
        <div class="card card-home">
          <div class="card-body">
            <h4 class="card-title">Registrarse como:</h4>
            <div class="btn-group" role="group" aria-label="Basic example">
            <button @click="showModalReg" type="button" class="btn btn-lg btn-success btn-cliente">
              Cliente
            </button>
            <modal-reg-formulario :titulo="'cliente'" :id="'rCliente'" @enviar="cerrarModal($event, 'cliente')"
              ref="modal" />
            <button @click="showModalRegAdmin" type="button" class="btn btn-lg btn-light">
              Administrador
            </button>
            </div>
           
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card card-home">
          <div class="card-body">
            <h4 class="card-title"> Ingresar como:</h4>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button @click="showModalLog('#cliente')" type="button"
                class="btn btn-lg btn-success btn-cliente">Cliente</button>
              <loguear-usuario :titulo="'cliente'" @enviar="cerrarModal($event, 'cliente')" ref="modalLog" />
              <button @click="showModalLog('#administrador')" type="button"
                class="btn btn-lg btn-light">Administrador</button>
              <loguear-usuario :titulo="'administrador'" @enviar="cerrarModal($event, 'administrador')"
                ref="modalLog" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import $ from 'jquery/src/jquery.js';
import 'bootstrap'
import ModalRegFormulario from "@/components/ModalRegFormulario.vue";
import LoguearUsuario from '@/components/LoguearUsuario.vue';

export default {
  name: 'HomeView',
  components: {
    ModalRegFormulario,
    LoguearUsuario,
  },
  methods: {
    showModalReg() {
      let elementModal = this.$refs.modal.$el;
      $(elementModal).modal('show');
    },
    showModalRegAdmin() {

    },
    showModalLog(elementModal) {
      $(elementModal).modal('show');
    },
    cerrarModal(data, elementModal) {
      $(elementModal).modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      console.log(data.view)
      this.$router.push('/' + data.view)
    },
  }
};
</script>

<style>
#app {
  font-family: "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn {
  font-family: "Courier New", Courier, monospace;
}

.card-home {
  background-color: #C7D3BF;
  margin-top: 30%;
  margin-bottom: 50%;
}

h4 {
  color: #2F2F2F;
}
</style>
