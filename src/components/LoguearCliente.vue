<template>
  <div class="modal" id="MLogCliente" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ingresar:</h5>
        </div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <div class="modal-body">
            <form role="form" class="form-control" @submit.prevent="handleSubmit(validarFormulario)" id="formulario">
              <!-- email -->
              <ValidationProvider name="email" rules="email|required" v-slot="{ errors }">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input v-model="email"  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <span>{{ errors[0] }}</span>
                <br />
              </ValidationProvider>
              <!-- password -->
              <ValidationProvider name="password" rules="alpha_num|required" v-slot="{ errors }">
                <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" />
                <span>{{ errors[0] }}</span>
                <br />
              </ValidationProvider>
              <button @submit.prevent="validarFormulario()" type="submit" class="btn btn-success">Ingresar</button>
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
import { required, email, alpha_num } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'Este campo es obligatorio.',
});

extend('email', email);

extend('alpha_num', {
  ...alpha_num,
  message: 'El campo {_field_} debe contener letras y numeros.'
});

export default {
  name: "LoguearCliente",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    validarFormulario() {
      alert("Formulario enviado!");
      this.$emit("enviar", this.$data);
    }
  }
};
</script>

<style scoped>
input {
  width: 300px;
}
</style>
