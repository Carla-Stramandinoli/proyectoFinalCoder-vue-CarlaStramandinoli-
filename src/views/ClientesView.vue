<template>
  <div>
    <div>
      <carrito-compras @vaciar="vaciar($event)" :elements="itemDelCarrito" />
    </div>
    <div class="d-flex justify-content-between m-2">
      <p class="bienvenida"><em> Bienvenido/a: {{ mostrarUsuActivo }}</em></p>
      <button @click="desloguear()" class="btn btn-danger logout" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Log-out">
        <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
      </button>
    </div>
    <!-- <div>{{ cargarElementos() }}</div> -->
    <div class="col-12">
      <div class="card-clientes">
        <div class="row m-2 d-flex justify-content-between">
          <product-item @agregalo_carrito="agregarElemento($event)" v-for="(elemento, index) of element" :key="index"
            :id="(elemento.nClave + index)" :nombre="elemento.name" :nClave="elemento.nClave" :img="elemento.img"
            :description="elemento.descripcion" :price="elemento.precio" :quantity="elemento.cantidad"></product-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
import CarritoCompras from '@/components/CarritoCompras.vue'
import axios from 'axios';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import $ from 'jquery/src/jquery.js';

export default {
  name: 'ClientesView',
  components: {
    ProductItem,
    CarritoCompras
  },
  data() {
    return {
      element: [],
      itemDelCarrito: [],
    }
  },
  created() {
    this.obtenerUsuariosApi();
    this.cargarElementos();
  },
  computed: {
    ...mapGetters('moduloClientes', ['getUsuActivo', 'getListaUsuCli']),
    mostrarUsuActivo() {
      let list = this.getListaUsuCli;
      console.log(list);
      list.forEach(element => {
        if (element == this.getUsuActivo) {
          return this.getUsuActivo;
        }
      });
      return this.getUsuActivo;
    },
  },
  methods: {
    ...mapActions('moduloClientes', ['obtenerUsuariosApi']),
    ...mapMutations('moduloClientes', ['desloguearUsuario']),
    cargarElementos() {
      const response = axios({
        method: "GET",
        url: "https://639f79eb5eb8889197fd60c9.mockapi.io/productos/",
      })
      let thisComponenet = this;
      response.then(function (response) {
        console.log(response.data[0].imagen);
        thisComponenet.element = response.data;
      })
      $('[data-bs-toggle="tooltip"]').tooltip()

    },
    agregarElemento(nuevoProducto) {
      let itemNoExiste = true;
      this.itemDelCarrito.forEach((item) => {
        if (item.name == nuevoProducto.name) {
          item.cantidad = parseInt(item.cantidad)
            + parseInt(nuevoProducto.cantidad);
          item.precio += nuevoProducto.precio;
          itemNoExiste = false;
        }
      })
      if (itemNoExiste) {
        this.itemDelCarrito.push(nuevoProducto);
      }
      this.$toastr.s("Producto agregado al carrito");
    },
    vaciar() {
      this.itemDelCarrito = [];
    },
    desloguear() {
      this.desloguearUsuario();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.card-clientes {
  background-color: #C7D3BF;
  border-radius: 2%;
  margin-top: 1%;
}

.bienvenida {
  font-size: 20px;
  margin-top: 1%;
}
.logout {
  margin-left: 1%;
}
</style>