<template>
  <div class="modal" v-bind:id="(titulo)" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title text-success">Ingresar {{ titulo }}</h4>
        </div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <div class="modal-body">
            <form role="form" class="form-control " @submit.prevent="handleSubmit(validarFormulario)"
              v-bind:id="'formLog-' + (titulo)">
              <!-- email -->
              <ValidationProvider name="email" rules="email|required" v-slot="{ errors }">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
                <span class="text-danger">{{ errors[0] }}</span>
                <br>
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
import { mapActions, mapGetters, mapMutations } from 'vuex';


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
    }
  },
  created() {
    this.obtenerUsuariosApi();
    this.obtenerAdminApi();
  },
  computed: {
    ...mapGetters('moduloClientes', ['getListaUsuCli', 'getListaAdmin', 'dibujarSpinner'])
  },
  methods: {
    ...mapActions('moduloClientes', ['obtenerUsuariosApi', 'obtenerAdminApi']),
    ...mapMutations('moduloClientes', ['guardarUsuActivo']),
    // Validar si el usuario esta logueado, ingresarlo
    validarFormulario() {
      if (document.querySelector("#idError") != null) {
        document.querySelector("#idError").remove();
      }
      let estaLogueado = false;
      let user = null;
      if (this.titulo == "cliente") {
        this.getListaUsuCli.map((usu) => {
          if (this.email == usu.email && this.password == usu.password) {
            estaLogueado = true;
            user = usu.email;
          }
        });
      } else {
        this.getListaAdmin.map((usu) => {
          console.log(usu);
          if (this.email == usu.email && this.password == usu.password) {
            estaLogueado = true;
            user = usu.email;
          }
        });
      }
      if (estaLogueado) {
        this.guardarUsuActivo(user);
        this.dibujarSpinner;
        console.log("#formLog-" + this.titulo);
        document.querySelector("#formLog-" + this.titulo).append(this.dibujarSpinner);
        setTimeout(() => {
          this.$emit("enviar", { user, view: this.titulo })
        }, 1000);
      } else {
        let divError = document.createElement("div");
        divError.id = "idError";
        divError.innerHTML = `<p class="text-danger">Contraseña/email invalido</p>`;
        document.querySelector("#formLog-" + this.titulo).append(divError);
      }
    }
  }
};
</script>

<style scoped>
.btn {
  margin-bottom: 2%;
}
</style>