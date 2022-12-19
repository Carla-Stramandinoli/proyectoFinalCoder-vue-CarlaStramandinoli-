<template>
  <div class="position-div col-12">
    <h5>Registrarse como:</h5>
    <div>
      <button @click="showModalReg"  type="button" class="btn btn-info btn-cliente">
        Cliente
      </button>
      <modal-formulario @enviar="cerrarModal($event, 'MRegCliente')" ref="modal"/>
    </div>
    <h5>Ingresar como:</h5>
    <div>
      <button @click="showModalLog('#cliente')" type="button" class="btn btn-info btn-cliente">Cliente</button>
      <loguear-cliente :titulo="'cliente'" @enviar="cerrarModal($event, 'cliente')" ref="modalLog"/>
    </div>
    <div class="btn-admin">
      <button @click="showModalLog('#administrador')" type="button" class="btn btn-warning">Administrador</button>
      <loguear-cliente :titulo="'administrador'" @enviar="cerrarModal($event, 'administrador')" ref="modalLog"/>
    </div>
  </div>
</template>

<script>
import $ from 'jquery/src/jquery.js';
import 'bootstrap'
import ModalFormulario from "@/components/ModalFormulario.vue";
import LoguearCliente from "@/components/LoguearCliente.vue";

export default {
  name: 'HomeView',
  components: {
    LoguearCliente,
    ModalFormulario,
  },
  methods: {
    showModalReg() {
      let elementModal = this.$refs.modal.$el;
      $(elementModal).modal('show');
    },
    showModalLog(elementModal) {
     $(elementModal).modal('show');
    },
    cerrarModal(data, elementModal) {
      $(elementModal).modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      this.$router.push('/' + data.view)
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.position-div {
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-admin {
  margin-top: 1%;
}

</style>
