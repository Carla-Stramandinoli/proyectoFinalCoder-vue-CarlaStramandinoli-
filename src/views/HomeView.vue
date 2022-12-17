<template>
  <div class="position-div col-12">
    <h5>Registrarse como:</h5>
    <div>
      <button @click="showModalReg"  type="button" class="btn btn-info btn-cliente">
        Cliente
      </button>

      <modal-formulario @enviar="cerrarModal($event)" ref="modal"/>
    </div>
    <div class="btn-admin">
      <button type="button" class="btn btn-warning">Administrador</button>
    </div>

    <h5>Ingresar como:</h5>
    <div>
      <button @click="showModalLog" type="button" class="btn btn-info btn-cliente">Cliente</button>
      <loguear-cliente ref="modalLog"/>
    </div>
    <div class="btn-admin">
      <button type="button" class="btn btn-warning">Administrador</button>
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
    showModalLog() {
      let elementModal = this.$refs.modalLog.$el;
      $(elementModal).modal('show');
    },
    cerrarModal(data) {
      let elementModal = this.$refs.modal.$el;
      $(elementModal).modal('hide');
      console.log(data);
      this.$router.push('/cliente')
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
