<template>
  <div>
    <div>
      <carrito-compras @vaciarCarrito="confirmarVaciar($event)" :elements="itemDelCarrito" />
    </div>
    <button @click="cargarElementos()" class="btn btn-outline-success m-2">Ver productos</button>
    <div class="col-12">
      <div class="card-clientes">
        <div class="row m-2 d-flex justify-content-between">
          <product-item @agregalo_carrito="agregarElemento($event)" v-for="(elemento, index) of element" :key="index"
            :id="(elemento.nClave + index)" :nombre="elemento.name" :nClave="elemento.nClave" :img="elemento.img"
            :description="elemento.description" :price="elemento.precio" :quantity="elemento.cantidad"></product-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
import CarritoCompras from '@/components/CarritoCompras.vue'
import axios from 'axios';


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
  methods: {
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
    //banana 1, manzana 2, uva 5, NUEVO banana 1
    agregarElemento(nuevoProducto) {
      let itemNOexiste = true; 
      this.itemDelCarrito.forEach((item) => {
        console.log(item);
        if (item.name == nuevoProducto.name) {
          item.cantidad = parseInt(item.cantidad) + parseInt(nuevoProducto.cantidad);
          item.precio += nuevoProducto.precio;
          itemNOexiste = false;
        } 
      })
      if(itemNOexiste){
        this.itemDelCarrito.push(nuevoProducto);
      }
      this.$toastr.s("Producto agregado al carrito");
    },
    confirmarVaciar() {
      this.itemDelCarrito = [];
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