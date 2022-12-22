<template>
    <div class="modal" v-bind:id="(titulo)" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Ingresar {{ titulo }}</h4>
          </div>
          <ValidationObserver v-slot="{ handleSubmit }">
            <div class="modal-body">
              <form role="form" class="form-control" @submit.prevent="handleSubmit(validarFormulario)" id="formulario">
                <!-- email -->
                <ValidationProvider name="email" rules="email|required" v-slot="{ errors }">
                  <label for="exampleInputEmail1" class="form-label">Email:</label>
                  <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" />
                  <span>{{ errors[0] }}</span>
                  <br />
                </ValidationProvider>
                <!-- password -->
                <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" />
                <br>
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
import axios from 'axios';


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
  props: {
    titulo: String
  },
  data() {
    return {
      email: "",
      password: "",
      passwords:
      {
        user: "1234",
        admin: "4321"
      }
    }
  },
  methods: {
    //modificar ingresos, si esta logueado o no, hacer log-out
    validarFormulario() {
      let userId = 2;
      let estaLogueado = false;
      if (this.titulo == "administrador" && this.password == this.passwords.admin) {
        userId = 1;
      }
      if (this.password == this.passwords.admin) {
        estaLogueado = true;
      }
      if (this.password == this.passwords.user) {
        estaLogueado = true;
      }
      if (estaLogueado) {
        const response = axios({
          method: "GET",
          url: "https://639f79eb5eb8889197fd60c9.mockapi.io/usuario/" + userId,
          data: {
            email: this.email,
            password: this.password,
          },
        })
        let thisComponente = this;
        response.then(function (response) {
          console.log(response);
          thisComponente.$emit("enviar", { response, view: thisComponente.titulo });
        })
      }
    }
  }
};
</script>
