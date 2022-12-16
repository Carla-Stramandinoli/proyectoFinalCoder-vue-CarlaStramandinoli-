<template>
  <div id="app">
    <div class="encabezado">
      <h1 class="title-index">Naguikki-ya</h1>
      <formulario-cliente />
    </div>
    <div class="row m-4 px-2 border tamanio-form">
      <h3 class="title-log">Loguearse</h3>
      <loguear-cliente />
    </div>
    <div class="row m-4 px-2 justify-content-between border border-2 border-success">
      <h3>Productos</h3>
      <listado-productos v-for="(elemento, index) of element" :key="index" :id="(elemento.nClave + index)" :name="elemento.name" :img="elemento.img"
        :description="elemento.description" :precio="elemento.precio"></listado-productos>
    </div>
    <div class="row m-4 px-2">
      <detalle-producto />
    </div>
    <div class="carrito">
      <carrito-compras :estilo="estilo1" />
    </div>
    <footer v-show="conFooter" class="encabezado">
      <p>Copyright Naguikki-ya 2022</p>
    </footer>
  </div>
</template>

<script>
import FormularioCliente from './components/FormularioCliente.vue';
import ListadoProductos from './components/ListadoProductos.vue';
import LoguearCliente from './components/LoguearCliente.vue';
import CarritoCompras from './components/CarritoCompras.vue';
import DetalleProducto from './components/DetalleProducto.vue';


export default {
  name: 'App',
  components: {
    ListadoProductos,
    FormularioCliente,
    LoguearCliente,
    CarritoCompras,
    DetalleProducto
  },
  data() {
    return {
      conFooter: true,
      element: [
        {
          name: "Lemon Pie",
          nClave: "lemon_pie",
          img: "../src/assets/lemonpie.jpg",
          description: "Base de masa sablee, relleno de curd de limon y merengue italiano",
          precio: 1800,
        },
        {
          name: "Brownie",
          nClave: "Brownie",
          img: "../src/assets/brownie.jpg",
          description: "Brownie con dulce de leche y merengue italiano",
          precio: 2000,
        },
        {
          name: "Havannet",
          nClave: "Havannet",
          img: "../src/assets/havennet.jpg",
          description: "Base de masa sablee, relleno de dulce de leche, cubierto con ganache de chocolate",
          precio: 1900,
        },
        {
          name: "Coco y dulce de leche",
          nClave: "dulce",
          img: "../src/assets/coco.jpg",
          description: "Base de masa sable, rellena de dulce de leche, cubierta de coco",
          precio: 1500,
        },
        {
          name: "Pastafrola",
          nClave: "Pastafrola",
          img: "../src/assets/pastafrola.jpg",
          description: "Pastafrola rellena de dulce de batata",
          precio: 1700,
        },
        {
          name: "Rogel",
          nClave: "Rogel",
          img: "../src/assets/rogel.jpg",
          description: "Bases de masa con dulce de leche, cubierto con merengue italiano",
          precio: 1900,
        },
      ],
      estilo1: ["table", "table-success"],
    }
  },
}
</script>

<style>
.encabezado {
  font-family: "Courier New", Courier, monospace;
  background-color: #C7D3BF;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.div-button {
  display: flex;
  justify-content: end;
  font-size: 20px;
  margin-right: 5%;
}

.btn-cliente {
  margin-top: 1%;
}

.tamanio-form {
  width: 350px;
  height: 245px;
}

h3 {
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  color: #5f967b;
}

.carrito {
  width: 70%;
  height: 25%;
  margin: 2% 0px 2% 15%;
}
</style>
