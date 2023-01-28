<template>
  <div>
    <div>
      <carrito-compras @vaciar="vaciar($event)" :elements="itemDelCarrito" />
    </div>
    <div>
      <p>Bienvenido/a: {{ mostrarUsuActivo }}</p>
      <button @click="desloguear()" class="btn btn-danger">Log-out</button>
    </div>
    <button @click="cargarElementos()" class="btn btn-outline-success m-2">Ver productos</button>
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
</style>