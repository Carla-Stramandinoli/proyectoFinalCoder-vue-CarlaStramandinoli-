<template>
  <div class="modal" id="MRegCliente" data-backdrop="no"  role="dialog" backdrdattabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Registrarse:</h5>
        </div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <div class="modal-body">
            <form role="form" class="form-control" @submit.prevent="handleSubmit(validarFormulario)" id="formulario">
              <!-- nombre -->
              <ValidationProvider name="nombre" rules="alpha|required" v-slot="{ errors }">
                <label for="exampleInputName" class="form-label">Nombre:</label>
                <input v-model="newClienteName" type="text" class="form-control" placeholder="Pepe"
                  id="exampleInputName">
                <span>{{ errors[0] }}</span>
                <br>
              </ValidationProvider>
              <!-- apellido -->
              <ValidationProvider name="apellido" rules="alpha|required" v-slot="{ errors }">
                <label for="exampleInputLastName" class="form-label">Apellido:</label>
                <input v-model="newClienteLastName" type="text" class="form-control" placeholder="Lopez"
                  id="exampleInputLastName">
                <span>{{ errors[0] }}</span>
                <br>
              </ValidationProvider>
              <!-- email -->
              <ValidationProvider name="email" rules="email|required" v-slot="{ errors }">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input v-model="newClienteEmail" type="email" class="form-control" placeholder="pepeLopez@hola.com"
                  id="exampleInputEmail1" aria-describedby="emailHelp">
                <span>{{ errors[0] }}</span>
                <br>
              </ValidationProvider>
              <!-- password -->
              <ValidationProvider name="password" rules="alpha_num|required" v-slot="{ errors }">
                <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
                <input v-model="newClientePass" type="password" class="form-control"
                  placeholder="Debe contener letras y numeros" id="exampleInputPassword1">

                <span>{{ errors[0] }}</span>
                <br>
              </ValidationProvider>
              <!-- confirmar password -->
              <!-- <ValidationProvider name="password" rules="required|confirmed:password" v-slot="{ errors }">
                <label for="exampleInputPassword1" class="form-label">Confirmar contraseña:</label>
                <input v-model="newClientePass" type="password" class="form-control"
                  placeholder="Repetir contraseña" id="exampleInputPassword1">

                <span>{{ errors[0] }}</span>
                <br>
              </ValidationProvider> -->


              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button @submit.prevent="validarFormulario()" type="submit" class="btn btn-success add-cliente">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, alpha, email, alpha_num } from 'vee-validate/dist/rules';


extend('required', {
  ...required,
  message: 'Este campo es obligatorio.',
});

extend('alpha', {
  ...alpha,
  message: 'El campo {_field_} solo puede contener letras.'
});

extend('email', email);

extend('alpha_num', {
  ...alpha_num,
  message: 'El campo {_field_} debe contener letras y numeros.'
});

export default {
  name: 'ModalFormulario',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      newClienteName: "",
      newClienteLastName: "",
      newClienteEmail: "",
      newClientePass: "",
    }
  },
  methods: {
    validarFormulario() {
      alert("Formulario enviado!");
      this.$emit("enviar", this.$data);

      // setTimeout(() => {
      //   document.getElementById("formulario").reset();
      //   Object.assign(this.$data, this.$options.data());
      // }, 2000);
    },
  }
}
</script>
<style scoped>

</style>