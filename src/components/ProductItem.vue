
<template>
  <div class="card col-3 m-2 border card-prod">
    <img :src="img" :alt="name" />
    <div class="card-body">
      <h2 class="card-title">
        <em>{{ nombre }}</em>
      </h2>
      <p class="card-text">
        <em><strong>${{ price }}</strong></em>
      </p>
      <div class="accordion-item">
        <div class="d-flex justify-content-center">
        <h2 class=" accordion-header" id="headingThree">
          <button class="accordion-button collapsed btn-info" type="button" data-bs-toggle="collapse"
            v-bind:data-bs-target="`#` + id" aria-expanded="false" aria-controls="collapseThree">
            <strong class="verMas">Ver mas</strong><font-awesome-icon icon="fa-solid fa-circle-info" size="lg" />
          </button>
          </h2>
        </div>
        <div v-bind:id="id" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p class="card-text">{{ description }}</p>
          </div>
        </div>
      </div>
      <br>
      <div class="d-flex justify-content-center">
        <button @click="addAlCarrito(nClave)" class="btn btn-success">
          Agregar producto
        </button>
        <input v-bind:id="nClave" v-model="cantidad" type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "ProductItem",
  props: {
    id: String,
    nClave: String,
    nombre: String,
    img: String,
    description: String,
    price: String,
    quantity: String,
  },
  data() {
    return {
      cantidad: 1,
      name: this.$props.nombre,
      precio: this.$props.price,
    }
  },
  methods: {
    addAlCarrito(idInputCantidad) {
      if (this.$data.cantidad > 1) {
        console.log(idInputCantidad);
      }
      const input = $("#" + idInputCantidad)[0];
      console.log(idInputCantidad);
      console.log(input.value);
      let precio_sum;
      if (input.value >= 1) {
        precio_sum = this.precio * input.value;
      }
      this.$emit("agregalo_carrito", {
        cantidad: input.value,
        name: this.$props.nombre,
        precio: precio_sum,
      });
      input.value = 1;
    },
  }
};
</script>

<style scoped>
h2 {
  font-size: 20px;
  color: #397d0b;
}

input {
  width: 20%;
  margin-left: 3%;
}

.verMas {
  padding-left: 5px;
  padding-right: 5px;
}

img {
  margin-top: 1%;
  width: 294px;
  height: 294px;
}
</style>
