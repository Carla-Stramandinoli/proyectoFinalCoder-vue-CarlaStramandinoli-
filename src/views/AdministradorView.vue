<template>
  <div>
    <div class="d-flex justify-content-between m-2">
      <p class="bienvenida"><em> Bienvenido/a: {{ mostrarUsuActivo }}</em></p>
      <button @click="desloguear()" class="btn btn-danger logout" data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-title="Log-out">
        <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
      </button>
    </div>
    <div class="btn-group m-2">
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h4 class="offcanvas-title text-success" id="offcanvasRightLabel">Agregar producto</h4>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <form-new-prod @reloadNewItem="cargarElementos()" />
        </div>
      </div>
      <ul class="nav nav-pills" id="myTab" role="tablist">
        <li>
          <button class="btn btn-outline-success" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Agregar producto</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="btn btn-outline-success" @click="cargarElementos()" id="home-tab" data-bs-toggle="tab"
            data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
            Ver productos
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="btn btn-outline-success" @click="verCarritos()" id="contact-tab" data-bs-toggle="tab"
            data-bs-target="#carrito-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane"
            aria-selected="false">
            Ver carritos
          </button>
        </li>
      </ul>
    </div>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
        <div class="d-flex justify-items-center">
          <div class="col-12 m-2 d-flex row ">
            <product-administrador @reloadNewItem="cargarElementos()" v-for="(elemento, index) of element" :key="index"
              :idHtml="(elemento.nClave + index)" :id="elemento.id" :nombre="elemento.name" :nClave="elemento.nClave"
              :img="elemento.img" :description="elemento.descripcion" :price="elemento.precio"
              :quantity="elemento.cantidad"></product-administrador>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="carrito-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
        <carrito-admin @reloadCart="verCarritos()" v-for="(elemento, index) of carritoE" :key="index"
          :lista="elemento.list_productos" :email-carrito="elemento.emailCli" :id-carrito="elemento.id"
          :date="elemento.createdAt" :zona="elemento.barrio">
        </carrito-admin>
      </div>
    </div>
  </div>
</template>

<script>
import ProductAdministrador from '@/components/ProductAdministrador.vue'
import FormNewProd from '@/components/FormNewProd.vue'
import CarritoAdmin from '@/components/CarritoAdmin.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex';
import axios from 'axios';

export default {
  name: 'AdministradorView',
  components: {
    ProductAdministrador,
    FormNewProd,
    CarritoAdmin
  },
  data() {
    return {
      element: [],
      carritoE: [],
    }
  },
  created() {
    this.obtenerAdminApi();
  },
  computed: {
    ...mapGetters('moduloClientes', ['getUsuActivo', 'getListaAdmin']),
    mostrarUsuActivo() {
      let list = this.getListaAdmin;
      list.forEach(element => {
        if (element == this.getUsuActivo) {
          return this.getUsuActivo
        }
      });
      return this.getUsuActivo;
    }
  },
  methods: {
    ...mapActions('moduloClientes', ['obtenerAdminApi']),
    ...mapMutations('moduloClientes', ['desloguearUsuario']),
    cargarElementos() {
      const response = axios({
        method: "GET",
        url: "https://639f79eb5eb8889197fd60c9.mockapi.io/productos",
      })
      let thisComponenet = this;
      response.then(function (response) {
        thisComponenet.element = response.data;
      })
    },
    verCarritos() {
      const URLPOST = "https://639f79eb5eb8889197fd60c9.mockapi.io/carrito";
      const response = axios({
        method: "GET",
        url: URLPOST,
      })
      let thisComponenet = this;
      response.then(function (response) {
        console.log(response.data);
        thisComponenet.carritoE = response.data;
      })
    },
    desloguear() {
      this.desloguearUsuario();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.bienvenida {
  font-size: 20px;
  margin-top: 1%;
}

.logout {
  margin-left: 1%;
}
</style>