<template>
  <div>
    <div>
      <carrito-compras @vaciarCarrito="confirmarVaciar($event)" :elements="itemDelCarrito" />
    </div>
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
import lemonImg from '@/assets/lemonpie.jpg'
import brownieImg from '@/assets/brownie.jpg'
import havannetImg from '@/assets/havannet.jpg'
import cocoImg from '@/assets/coco.jpg'
import pastafrolaImg from '@/assets/pastafrola.jpg'
import rogelImg from '@/assets/rogel.jpg'

export default {
  name: 'ClientesView',
  components: {
    ProductItem,
    CarritoCompras
  },
  data() {
    return {
      element: [
        {
          name: "Lemon Pie",
          nClave: "lemon_pie",
          img: lemonImg,
          description: "Base de masa sablee, relleno de curd de limon y merengue italiano",
          precio: 1800,
          cantidad: 1
        },
        {
          name: "Brownie",
          nClave: "Brownie",
          img: brownieImg,
          description: "Brownie con dulce de leche y merengue italiano",
          precio: 2000,
          cantidad: 1
        },
        {
          name: "Havannet",
          nClave: "Havannet",
          img: havannetImg,
          description: "Base de masa sablee, relleno de dulce de leche, cubierto con ganache de chocolate",
          precio: 1900,
          cantidad: 1
        },
        {
          name: "Coco y dulce de leche",
          nClave: "dulce",
          img: cocoImg,
          description: "Base de masa sable, rellena de dulce de leche, cubierta de coco",
          precio: 1500,
          cantidad: 1
        },
        {
          name: "Pastafrola",
          nClave: "Pastafrola",
          img: pastafrolaImg,
          description: "Pastafrola rellena de dulce de batata",
          precio: 1700,
          cantidad: 1
        },
        {
          name: "Rogel",
          nClave: "Rogel",
          img: rogelImg,
          description: "Bases de masa con dulce de leche, cubierto con merengue italiano",
          precio: 1900,
          cantidad: 1
        },
      ],
      itemDelCarrito: [],
    }
  },
  methods: {
    agregarElemento(nuevoProducto) {
      this.itemDelCarrito.push(nuevoProducto);
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